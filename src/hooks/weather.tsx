
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (query: string | { lat: number, lng: number }) => {

    let url;

    if(typeof query === 'object'){
        url = `${baseUrl}forecast?lat=${query.lat}&lon=${query.lng}&units=metric&appid=${import.meta.env.VITE_REACT_WEATHER_APP_API_KEY}`;
    } else {
        url = `${baseUrl}forecast?q=${query}&units=metric&appid=${import.meta.env.VITE_REACT_WEATHER_APP_API_KEY}`;
    }

    return await (await fetch(url)).json();

}

