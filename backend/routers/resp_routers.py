from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import crud.crud, schemas.response_schemas
from database import get_db

router = APIRouter()

@router.post("/responses/", response_model=schemas.response_schemas.Response)
def create_response(response: schemas.response_schemas.ResponseCreate, db: Session = Depends(get_db)):
    return crud.crud.create_response(db, response)

@router.get("/responses/", response_model=list[schemas.response_schemas.Response])
def read_responses(db: Session = Depends(get_db)):
    return crud.crud.get_responses(db)

@router.get("/responses/user/{user_id}", response_model=list[schemas.response_schemas.Response])
def read_responses_by_user(user_id: int, db: Session = Depends(get_db)):
    return crud.crud.get_responses_by_user(db, user_id)

