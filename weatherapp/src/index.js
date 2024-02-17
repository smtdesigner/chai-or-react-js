
const baseURL = "https://api.weatherapi.com/v1/current.json?key=b7e2902f7f7e444e8c461253240902&q=London&aqi=no"

export const getWeatherDataForCity = async (city) => {
    const responce = await fetch(`${baseURL}&q=${city}&api=yes`)
    return await responce.json();

}