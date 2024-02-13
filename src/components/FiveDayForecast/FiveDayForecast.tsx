import ForecastItem from './FiveDayForecastItem';
import { 
    SectionTitle 
} from '../../app.styled';
import { 
    ForecastContainer,
    ForecastItems,
} from './styled';

interface WeatherInfo {
    type: string;
    description: string;
    code: number;
}
  
interface Temperature {
    min: number;
    max: number;
}
  
interface FiveDayForecast {
    date: number;
    day: string;
    temp: Temperature;
    weather: WeatherInfo;
}

interface WeatherItem {
    dt: number;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    weather: {
        id: number;
        main: string;
    }[];
}
  
interface Weather {
    list?: WeatherItem[];
}

interface Props {
    weather: Weather;
    tempUnit: string;
}

const FiveDayForecast = ({weather, tempUnit} : Props) =>{

    //console.log('Forecast Data:', weather);

    const get5DayForecast = () => {

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let todaysDate = new Date().getDate();

        const fiveDayForecast: FiveDayForecast[] = Array.from({ length: 5 }, (_, i) => {
            const nextDateTime = new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000);
          
            return {
                date: nextDateTime.getDate(),
                day: days[nextDateTime.getDay()],
                temp: { min: 0, max: 0 },
                weather: { type: '', description: '', code: 0 }
            };
        });

        let count = 0;
        let prevDate = new Date( Date.now() + 1 * 24 * 60 * 60 * 1000).getDate();
        let first = true;

        if(weather.list){
            weather.list.forEach((item: any) => {

                let dateTime = new Date(item.dt * 1000);
                let date = dateTime.getDate();
    
                if(date !== todaysDate){
    
                    let temp = Math.round(item.main.temp);
                    let code = item.weather[0].id;
                    let type = item.weather[0].main;
                    let description = item.weather.description;
    
                    if(first){
                        fiveDayForecast[count].temp.min = temp;
                        fiveDayForecast[count].temp.max = temp;
                        first = false;
                    } else {
    
                        if(date !== prevDate){
                            prevDate = date;
                            count++;
                            fiveDayForecast[count].temp.min = temp;
                            fiveDayForecast[count].temp.max = temp;
                        }
    
                        if(temp < fiveDayForecast[count].temp.min){
                            fiveDayForecast[count].temp.min = temp;
                        }
                        if(temp > fiveDayForecast[count].temp.max){
                            fiveDayForecast[count].temp.max = temp;
                        }
                    }
    
                    if(item.dt_txt.includes('12:00:00')){
                        fiveDayForecast[count].weather.code = code;
                        fiveDayForecast[count].weather.type = type;
                        fiveDayForecast[count].weather.description = description;
                    } else if(fiveDayForecast[count].weather.type == ''){
                        fiveDayForecast[count].weather.code = code;
                        fiveDayForecast[count].weather.type = type;
                    }
                }
            });
        }

        return fiveDayForecast;

    }

    return (
        <>
            {weather.list && (
                <ForecastContainer>
                    <SectionTitle>
                        <span uk-icon="calendar"></span> 
                        <span>5 Day Forecast</span>
                    </SectionTitle>
                    <ForecastItems>
                    {get5DayForecast().map((item) => {
                        return (
                        <ForecastItem
                            day={item.day}
                            high={item.temp.max}
                            low={item.temp.min}
                            weatherCode={item.weather.code}
                            main={item.weather.type}
                            tempUnit={tempUnit}
                        />
                        );
                    })}
                    </ForecastItems>
                </ForecastContainer> 
            )}
        </>
    );

}

export default FiveDayForecast;