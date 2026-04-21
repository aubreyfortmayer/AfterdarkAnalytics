from pydantic import BaseModel
# schemas for data validation

class ResponseBase(BaseModel):
    mood_level: str
    energy_level: str
    responsibility_level: str

class ResponseCreate(ResponseBase):
    latitude: float
    longitude: float

class Response(ResponseBase):
    id: int

    class Config:
        from_attributes = True

