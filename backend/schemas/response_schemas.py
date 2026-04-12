from pydantic import BaseModel
# schemas for data validation

class ResponseBase(BaseModel):
    #user_id: int
    forecasted_weather: str
    mood_level: str
    energy_level: str
    responsibility_level: str

class ResponseCreate(ResponseBase):
    #submitted_at: datetime
    pass

class Response(ResponseBase):
    id: int

    class Config:
        from_attributes = True

