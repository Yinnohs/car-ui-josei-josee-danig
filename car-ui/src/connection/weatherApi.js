import {API_KEY,API_URL} from '@env'

export const getWeatherInformation = async ()=>{
    const query = `${API_URL}current.json?key=${API_KEY}&q=tenerife-canarias-spain&aqi=no`
    const response = await fetch(query,
        {method:'GET',
        headers:{'Content-Type': 'application/json'},
    })
    const data = await response.json()
    return data
}