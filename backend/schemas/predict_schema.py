from pydantic import BaseModel

class PredictRequest(BaseModel):
    user_id: int
    mood: str
    energy: str
    responsibility: str
    weather: str