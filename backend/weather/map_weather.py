RAIN_CODES = {
        51, 53, 55, 56, 57,
        61, 63, 65, 66, 67,
        71, 73, 75, 77,
        80, 81, 82,
        85, 86,
        95, 96, 99
    }

COLD_THRESHOLD_F = 12.7778

def map_weather(temp_c: float, weathercode: int) -> str:
   # predict rain
    if weathercode in RAIN_CODES:
        return "Rain"

    # predict cold
    if temp_c < COLD_THRESHOLD_F:
        return "Cold"

    if weathercode in {2, 3, 45, 48}:
        return "Warm"

    return "Clear Skies"
