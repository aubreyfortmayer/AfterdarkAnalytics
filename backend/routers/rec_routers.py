from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from crud.crud import create_response, create_recommendation
from schemas.recommendation_schemas import RecommendationResponse
from schemas.response_schemas import ResponseCreate
from database import get_db
import pandas as pd
import joblib
from weather.map_weather import map_weather
from weather.open_meteo import fetch_weather

router = APIRouter()


# load pre-trained model and encoders
model = joblib.load(open("routers/models/final_model.pkl", "rb"))
ohe_weather = joblib.load(open("routers/models/ohe_weather.pkl", "rb"))
ord_mood = joblib.load(open("routers/models/ordinal_mood.pkl", "rb"))
ord_energy = joblib.load(open("routers/models/ordinal_energy.pkl", "rb"))
ord_responsibility = joblib.load(open("routers/models/ordinal_responsibility.pkl", "rb"))

weather_categories = ["Clear Skies", "Cold", "Rain", "Warm"]

@router.post("/predict/", response_model=RecommendationResponse)
async def predict(payload: ResponseCreate, db: Session = Depends(get_db)):
    response = create_response(db, payload)

    weather = await fetch_weather(payload.latitude, payload.longitude)
    temp_c = weather["temperature"]
    weathercode = weather["weathercode"]

    mapped_weather = map_weather(temp_c, weathercode)
    print(mapped_weather)

    # encode weather
    weather_df = pd.DataFrame([[mapped_weather]], columns=["Forecasted Weather"])
    weather_encoded = ohe_weather.transform(weather_df)
    weather_df_encoded = pd.DataFrame(weather_encoded, columns=ohe_weather.get_feature_names_out(["Forecasted Weather"]))

    # ordinal encode mood, energy, responsibility
    mood_df = pd.DataFrame([[payload.mood_level]], columns=["Mood Level Before Going Out (Throughout the Day)"])
    mood_ord = ord_mood.transform(mood_df)[0][0]

    energy_df = pd.DataFrame([[payload.energy_level]], columns=["Energy Level Before Going Out (Throughout the Day)"])
    energy_ord = ord_energy.transform(energy_df)[0][0]

    responsibility_df = pd.DataFrame([[payload.responsibility_level]], columns=["Responsibility Level Before Going Out (Throughout the Day)"])
    responsibility_ord = ord_responsibility.transform(responsibility_df)[0][0]
    
    # mood × responsibility
    mood_x_resp = mood_ord * responsibility_ord

    # final feature order
    feature_df = pd.concat([weather_df_encoded, pd.DataFrame({
        "mood_ord": [mood_ord],
        "energy_ord": [energy_ord],
        "responsibility_ord": [responsibility_ord],
        "mood_x_responsibility": [mood_x_resp]
    })], axis=1)

    #feature_df = feature_df.index(columns=model.feature_names_in_)

    # make prediction
    pred_prob = model.predict_proba(feature_df)[:,1][0]
    pred_class = int(pred_prob >= 0.5)
    will_go_out = bool(pred_class)

    ml_result = {
        "will_go_out": will_go_out,
        "prediction": pred_class,
        "probability": float(pred_prob)
    }

    recommendation = create_recommendation(
        db,
        response_id=response.id,
        ml_result=ml_result
    )
    
    return recommendation