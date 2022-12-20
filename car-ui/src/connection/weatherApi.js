export const getWeatherInformation = async ()=>{
    const query = `https://api.weatherapi.com/v1/current.json?key=fd487c9ed4384b24afd171433222012&q=tenerife-canarias-spain&aqi=no`
    const response = await fetch(query)
    const data = await response.json()

    return data
}