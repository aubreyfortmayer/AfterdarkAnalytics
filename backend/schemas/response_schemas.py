from pydantic import BaseModel

# schemas for data validation

class ResponseBase(BaseModel):
    user_id: int
    energy_level: int
    responsibility_level: int
    responsibility_level: int

class ResponseCreate(ResponseBase):
    pass

class Response(ResponseBase):
    id: int

    class Config:
        from_attributes = True

