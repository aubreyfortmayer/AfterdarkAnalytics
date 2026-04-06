from pydantic import BaseModel, EmailStr

# schemas for data validation

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password_hash: str

class User(UserBase):
    id: int

    class Config:
        from_attributes = True