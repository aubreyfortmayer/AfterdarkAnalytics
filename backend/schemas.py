from pydantic import BaseModel
from datetime import datetime

# schemas for data validation

class userBase(BaseModel):
    username: str
    email: str
    password_hash: str

class responseBase(BaseModel):
    user_id: int
    energy_level: int
    responsibility_level: int
    submitted_at: datetime
    


# trying to figure out how too do the shcemas for data validation