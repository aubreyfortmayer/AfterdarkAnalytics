from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.sql import func
from database import Base

class Responses(Base):
    __tablename__ = "responses"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    energy_level = Column(Integer)
    responsibility_level = Column(Integer)
    submitted_at = Column(DateTime)

class recommendations(Base):
        __tablename__ = "recommendations"
        id = Column(Integer, primary_key=True, index=True)
        response_id = Column(Integer, ForeignKey("responses.id"))
        ml_score = Column(Integer)
        confidence_score = Column(Integer)

class users(Base):
      __tablename__ = "users"
      username = Column(Integer, primary_key=True)



                             
        



    