import { useState } from 'react';
import WeatherIcon from "../../utils/weatherIcon";
import { dateBuilder } from '../../utils/dateUtils';
import { kmToMile } from '../../utils/unitConversion';
import Temperature from '../../utils/temperature';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';
import { 
    SectionTitle 
} from '../../app.styled';
import {
    WeatherContainer,
    HelperContainer,
    UnitSwitcher,
    LocationDateContainer,
    CurrentWeatherContainer,
    CurrentTemperature,
    FeelsLike,
    HighLowContainer,
    ExtraInfoRow,
    HightLowItem,
    ErrorContainer,
    ErrorIcon,
    ErrorMessage,
    InfoContainer,
    InfoIcon,
    InfoMessage
} from './styled';

interface Weather {
    list?: Array<{
        weather: Array<{
            id: number;
            description: string;
        }>;
        main: {
            temp: number;
            feels_like: number;
            temp_max: number;
            temp_min: number;
            humidity: number;
            pressure: number;
        };
        wind: {
            speed: number;
        };
    }>;
    city?: {
        name: string;
        country: string;
    };
    cod?: string;
    message?: string;
}

interface Props {
    weather: Weather;
    onToggle: (tempUnit: 'CELSIUS' | 'FAHRENHEIT') => void;
    tempUnit: string;
}

const CurrentWeather = ({weather, onToggle, tempUnit} : Props) => {

    //console.log('Weather Data:', weather);

    const [checked, setChecked] = useState(false);

    const handleUnitChange = () => {

        checked ? onToggle('CELSIUS') : onToggle('FAHRENHEIT');
        setChecked(!checked);

    }

    return (
        <>
            {weather.list && weather.city ? (
                <WeatherContainer>
                    <div className='uk-flex uk-flex-between'>
                        <SectionTitle className="uk-text-large">
                            Current Weather
                        </SectionTitle>
                        <ToggleSwitch checked={checked} handleUnitChange={handleUnitChange} />
                    </div>
                    <div className='uk-grid uk-margin-remove'>
                        <div className='uk-padding-small uk-width-2-3@s'>
                            <LocationDateContainer>
                                <div className='location'>
                                    {weather.city.name}, {weather.city.country}
                                </div>
                                <div className='date'>
                                    {dateBuilder()}
                                </div>
                            </LocationDateContainer>
                            <CurrentWeatherContainer>
                                <div className="uk-flex uk-flex-middle">
                                    <div>
                                        <WeatherIcon code={weather.list[0].weather[0].id} big />
                                    </div>
                                    <CurrentTemperature>
                                        <Temperature value={Math.round(weather.list[0].main.temp)} tempUnit={tempUnit} />
                                    </CurrentTemperature> 
                                </div>
                                <h4>{weather.list[0].weather[0].description}</h4>
                            </CurrentWeatherContainer>
                        </div>
                        <div className='uk-padding-small uk-width-1-3@s'>
                            <hr className='uk-hidden@s' />
                            <FeelsLike>
                                Feels like <Temperature value={Math.round(weather.list[0].main.feels_like)} tempUnit={tempUnit} />
                            </FeelsLike>
                            <HighLowContainer>
                                <HightLowItem>
                                    <i className="bi bi-thermometer-high"></i>
                                    <Temperature value={Math.round(weather.list[0].main.temp_max)} tempUnit={tempUnit} />
                                </HightLowItem>
                                <HightLowItem>
                                    <i className="bi bi-thermometer-low"></i>
                                    <Temperature value={Math.round(weather.list[0].main.temp_min)} tempUnit={tempUnit} />
                                </HightLowItem>
                            </HighLowContainer>
                            <ExtraInfoRow>
                                <div>
                                    <i className="bi bi-droplet"></i> Humidity
                                </div>
                                <span>{weather.list[0].main.humidity}%</span>
                            </ExtraInfoRow>
                            <ExtraInfoRow>
                                <div>
                                    <i className="bi bi-wind"></i> Wind
                                </div>
                                <span>
                                {tempUnit === 'CELCIUS' ? weather.list[0].wind.speed : kmToMile(weather.list[0].wind.speed)}
                                {tempUnit === 'CELCIUS' ? 'kph' : 'mph'}
                                </span>
                            </ExtraInfoRow>
                            <ExtraInfoRow>
                                <div>
                                    <i className="bi bi-graph-up"></i> Pressure
                                </div>
                                <span>{weather.list[0].main.pressure}hPa</span>
                            </ExtraInfoRow> 
                        </div>
                    </div>
                </WeatherContainer>
            ) : (
                <HelperContainer>
                    <ErrorContainer>
                        <ErrorIcon />
                        <ErrorMessage>
                            {(weather.cod !== "") ? ('Code ' + weather.cod +  ' : ' +  weather.message + '.') : ('Something went wrong!')}
                        </ErrorMessage>
                    </ErrorContainer>
                    <InfoContainer>
                        <InfoIcon />
                        <InfoMessage>
                            Supported search formats: (City Name) or (City Name, Country Code).
                        </InfoMessage>
                    </InfoContainer>
                </HelperContainer>
            )}
        </>
    );
};

export default CurrentWeather;