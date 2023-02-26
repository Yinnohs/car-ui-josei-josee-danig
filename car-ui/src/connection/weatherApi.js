
const API_KEY = "0a82a37feea645c2b7d222324222012"
const API_URL = "https://api.weatherapi.com/v1/"

export const getWeatherInformation = async () => {
    const query = `${API_URL}current.json?key=${API_KEY}&q=tenerife-canarias-spain&aqi=no`
    const response = await fetch(query,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
    const data = await response.json()
    return data
}
