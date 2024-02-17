import ForecastItem from './ForecastItem';
import { 
    SectionTitle 
} from '../../app.styled';
import { 
    ForecastContainer,
    ForecastItems, 
} from './styled';

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

const Forecast = ({weather, tempUnit} : Props) => {

    //console.log('Forecast Data:', weather);
    
    return (
        <>
            {weather.list && (
                <ForecastContainer>
                    <SectionTitle>
                        <span uk-icon="clock"></span> 
                        <span>3 Hourly Forecast</span>
                    </SectionTitle>
                    <ForecastItems>
                        {weather.list.map((item, i) => {
                            return (
                            <ForecastItem
                                key={i}
                                index={i}
                                dateTime={item.dt}
                                temp={item.main.temp}
                                weatherCode={item.weather[0].id}
                                tempUnit={tempUnit}
                                //main={item.weather[0].main}
                            />
                            );
                        })}
                    </ForecastItems>
                </ForecastContainer> 
            )}
        </>
    );
}

export default Forecast;