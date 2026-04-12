from sqlalchemy.orm import Session
from models import Responses, Recommendations, Users
from schemas import recommendation_schemas, user_schemas, response_schemas
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
    #submitted_at = response.submitted_at or datetime.utcnow()
    
    new_response = Responses(
        #user_id= 1,
        forecasted_weather=response.forecasted_weather,
        energy_level=response.energy_level,
        mood_level=response.mood_level,
        responsibility_level=response.responsibility_level,
        #submitted_at=submitted_at
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
def create_recommendation(db: Session, response_id: int, ml_result: dict):
    print("create recommendation")

    new_recommendation = Recommendations(
        response_id=response_id,
        will_go_out=ml_result["will_go_out"],
        prediction=ml_result["prediction"],
        probability=ml_result["probability"],
        #created_at=datetime.utcnow()
    )
    db.add(new_recommendation)
    db.commit()
    db.refresh(new_recommendation)
    return new_recommendation
