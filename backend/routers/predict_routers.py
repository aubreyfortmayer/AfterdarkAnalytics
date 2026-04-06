from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import crud.crud, schemas.predict_schema
from database import get_db
from ml_model import predict_go_out

router = APIRouter()

@router.post("/predict/")
def predict(request: schemas.predict_schema.PredictRequest, db: Session = Depends(get_db)):

    # Save raw user response
    new_response = crud.crud.create_response(db, schemas.ResponseCreate(
        user_id=request.user_id,
        mood=request.mood,
        energy=request.energy,
        responsibility=request.responsibility,
        weather=request.weather
    ))

    # Make ML prediction
    prediction, confidence = predict_go_out(
        request.mood, request.energy, request.responsibility, request.weather
    )

    # Save recommendation
    new_recommendation = crud.crud.create_recommendation(db, schemas.RecommendationCreate(
        response_id=new_response.id,
        ml_score=int(prediction),
        confidence_score=float(confidence)
    ))

    return {
        "decision": "Go out" if prediction == 1 else "Stay in",
        "confidence": confidence,
        "response": new_response,
        "recommendation": new_recommendation
    }