import joblib
import numpy as np

model = joblib.load("model_files/model.pkl")
ohe = joblib.load("model_files/ohe.pkl")
mood_encoder = joblib.load("model_files/mood_encoder.pkl")
energy_encoder = joblib.load("model_files/energy_encoder.pkl")
responsibility_encoder = joblib.load("model_files/responsibilit_encoder.pkl")

def predict_go_out(mood: str, energy: str, responsibility: str, weather: str):

    # encode weather (one-hot)
    weather_array = ohe.transform([[weather]])

    # encode ordinal features
    mood_ord = mood_encoder.transform([[mood]])[0][0]
    energy_ord = energy_encoder.transform([[energy]])[0][0]
    responsibility_ord = responsibility_encoder.transform([[responsibility]])[0][0]

    # feature engineering
    mood_x_responsibility = mood_ord * responsibility_ord

    # combine all features in correct order
    X = np.hstack([
        weather_array,
        [[mood_ord, energy_ord, responsibility_ord, mood_x_responsibility]]
    ])

    # predict
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0][prediction]

    return prediction, probability