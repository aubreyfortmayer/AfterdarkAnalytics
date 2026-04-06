from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import crud.crud, schemas.user_schemas
from database import get_db

router = APIRouter()

#---------------------------------------------------------#
# USERS ROUTES
@router.post("/users/", response_model=schemas.user_schemas.User)
def create_user(user: schemas.user_schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.crud.create_user(db, user)

@router.get("/users/", response_model=list[schemas.user_schemas.User])
def read_users(db: Session = Depends(get_db)):
    return crud.crud.get_users(db)

@router.get("/users/{user_id}", response_model=schemas.user_schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = crud.crud.get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user