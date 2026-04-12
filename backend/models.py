from sqlalchemy import ForeignKey
from sqlalchemy.orm import mapped_column, Mapped
from database import Base

class Responses(Base):
    __tablename__ = "responses"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    
    forecasted_weather: Mapped[str] = mapped_column(nullable=False)
    mood_level: Mapped[str] = mapped_column(nullable=False)
    energy_level: Mapped[str] = mapped_column(nullable=False)
    responsibility_level: Mapped[str] = mapped_column(nullable=False)

class Recommendations(Base):
    __tablename__ = "recommendations"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    response_id: Mapped[int] = mapped_column(ForeignKey("responses.id"), nullable=False)
    will_go_out: Mapped[bool] = mapped_column(nullable=False)
    prediction: Mapped[int] = mapped_column(nullable=False)
    probability: Mapped[float] = mapped_column(nullable=False)
