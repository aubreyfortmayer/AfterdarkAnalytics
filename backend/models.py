from sqlalchemy import ForeignKey, DateTime
from sqlalchemy.orm import mapped_column, Mapped
from database import Base

class Responses(Base):
    __tablename__ = "responses"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    energy_level: Mapped[int] = mapped_column(nullable=False)
    responsibility_level: Mapped[int] = mapped_column(nullable=False)
    submitted_at: Mapped[DateTime] = mapped_column(DateTime)

class Recommendations(Base):
    __tablename__ = "recommendations"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    response_id: Mapped[int] = mapped_column(ForeignKey("responses.id"), nullable=False)
    ml_score: Mapped[int] = mapped_column(nullable=False)
    confidence_score: Mapped[int] = mapped_column(nullable=False)

class Users(Base):
    __tablename__ = "users"
    username: Mapped[str] = mapped_column(nullable=False)
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(nullable=False)
    password_hash: Mapped[str]






                             
        



    