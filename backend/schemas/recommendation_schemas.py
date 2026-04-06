from pydantic import BaseModel

# schemas for data validation

class RecommendationBase(BaseModel):
    response_id: int
    ml_score: float
    confidence_score: float

class RecommendationCreate(RecommendationBase):
    pass

class RecommendationUpdate(BaseModel):
    ml_score: float | None = None
    confidence_score: float | None = None

class Recommendation(RecommendationBase):
    id: int
    class Config: 
        from_attributes = True
