from pydantic import BaseModel
from datetime import datetime

# schemas for data validation

class RecommendationRequest(BaseModel):
    forecasted_weather: str
    mood_level: str
    energy_level: str
    responsibility_level: str
    #submitted_at: str

class RecommendationResponse(BaseModel):
    will_go_out: bool
    prediction: int
    probability: float