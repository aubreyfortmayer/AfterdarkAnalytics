from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import rec_routers, resp_routers

app = FastAPI()

app.include_router(rec_routers.router)
app.include_router(resp_routers.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
