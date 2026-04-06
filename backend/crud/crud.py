from sqlalchemy.orm import Session
from models import Responses, Recommendations, Users
from schemas import predict_schema, recommendation_schemas, user_schemas, response_schemas
from datetime import datetime



#USERS
def create_user(db: Session, user: user_schemas.UserCreate):
    new_user = Users(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def get_users(db: Session):
    return db.query(Users).all()

def get_user_by_id(db: Session, user_id: int):
    return db.query(Users).filter(Users.id == user_id).first()

#responses
def create_response(db: Session, response: response_schemas.ResponseCreate):
    submitted_at = response.submitted_at or datetime.utcnow()
    new_response = Responses(
        user_id=response.user_id,
        energy_level=response.energy_level,
        responsibility_level=response.responsibility_level,
        submitted_at=submitted_at
    )
    db.add(new_response)
    db.commit()
    db.refresh(new_response)
    return new_response

def get_responses(db: Session):
    return db.query(Responses).all()

def get_responses_by_user(db: Session, user_id: int):
    return db.query(Responses).filter(Responses.user_id == user_id).all()

# recommendations

def create_recommendation(db: Session, recommendation: recommendation_schemas.RecommendationCreate):
    new_recommendation = Recommendations(
        response_id=recommendation.response_id,
        ml_score=recommendation.ml_score,
        confidence_score=recommendation.confidence_score
    )
    db.add(new_recommendation)
    db.commit()
    db.refresh(new_recommendation)
    return new_recommendation

def get_recommendations(db: Session):
    return db.query(Recommendations).all()

def get_recommendations_by_response(db: Session, response_id: int):
    return db.query(Recommendations).filter(Recommendations.response_id == response_id).all()

def update_recommendation(db: Session, recommendation_id: int, updates: recommendation_schemas.RecommendationUpdate):
    db_rec = db.query(Recommendations).filter(Recommendations.id == recommendation_id).first()
    if db_rec is None:
        return None
    
    for key, value in updates.dict(exclude_unset=True).items():
        setattr(db_rec, key, value)
    
    db.commit()
    db.refresh(db_rec)
    return db_rec