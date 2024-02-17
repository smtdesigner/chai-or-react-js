import { createContext, useContext, useState } from 'react';
import { getWeatherDataForCity } from '../api';

const WeatherContext = createContext(null)
export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null)
    cosnt [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const responce = await getWeatherDataForCity(searchCity)
        setData(responce)

    }

    return(
        <WeatherContextProvider value={{searchCity, data, setSearchCity,fetchData}}>
            {props.children}
        </WeatherContextProvider>
        ) 
        
    
}

