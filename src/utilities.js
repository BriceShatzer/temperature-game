
export default function getCityTemp (city) {
    const apiKey = '9cff733aee57cb05b63dd4f731c46bc4';
    const unit = 'metric';
    
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`, {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result =>{
            console.log(result.main.temp);
            return result.main.temp;
        })
        .catch(error => console.log('error', error));
}

/*
{
    "coord": {
        "lon": -87.65,
        "lat": 41.85
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 300.94,
        "feels_like": 301.72,
        "temp_min": 298.15,
        "temp_max": 302.84,
        "pressure": 1012,
        "humidity": 54,
        "sea_level": 1012,
        "grnd_level": 992
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.53,
        "deg": 221,
        "gust": 5.82
    },
    "clouds": {
        "all": 26
    },
    "dt": 1628798069,
    "sys": {
        "type": 1,
        "id": 4309,
        "country": "US",
        "sunrise": 1628765761,
        "sunset": 1628816120
    },
    "timezone": -18000,
    "id": 4887398,
    "name": "Chicago",
    "cod": 200
}
*/