from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud.crud, schemas.recommendation_schemas
from database import get_db
from ml_model import predict_go_out

router = APIRouter()

@router.post("/recommendations/", response_model=schemas.recommendation_schemas.Recommendation)
def create_recommendation(rec: schemas.recommendation_schemas.RecommendationCreate, db: Session = Depends(get_db)):
    return crud.crud.create_recommendation(db, rec)

@router.get("/recommendations/", response_model=list[schemas.recommendation_schemas.Recommendation])
def read_recommendations(db: Session = Depends(get_db)):
    return crud.crud.get_recommendations(db)

@router.get("/recommendations/response/{response_id}", response_model=list[schemas.recommendation_schemas.Recommendation])
def read_recommendations_by_response(response_id: int, db: Session = Depends(get_db)):
    return crud.crud.get_recommendations_by_response(db, response_id)

@router.put("/recommendations/{recommendation_id}", response_model=schemas.recommendation_schemas.Recommendation)
def update_recommendation(recommendation_id: int, updates: schemas.recommendation_schemas.RecommendationUpdate, db: Session = Depends(get_db)):
    updated = crud.crud.update_recommendation(db, recommendation_id, updates)
    if not updated:
        raise HTTPException(status_code=404, detail="Recommendation not found")
    return updated

