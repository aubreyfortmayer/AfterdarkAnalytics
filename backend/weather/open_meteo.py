import httpx

# fetch open meteo current weather conditions
async def fetch_weather(lat: float, lon: float):
    url = "https://api.open-meteo.com/v1/forecast"

    params = {
        "latitude": lat,
        "longitude": lon,
        "current_weather": True
    }

    async with httpx.AsyncClient() as client:
        res = await client.get(url, params=params)
        data = res.json()

    return data["current_weather"]