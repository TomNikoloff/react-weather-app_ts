import { celciusToFahrenheit} from './unitConversion';

interface Props {
  tempUnit: string;
  value: number;
}

const Temperature = ({tempUnit, value} : Props) => {
  
    if (tempUnit === 'FAHRENHEIT') {
      return (
        <>
            {celciusToFahrenheit(value)}
            <sup>&deg;</sup>F
        </>
      );
    }
    return (
        <>
            {value}
            <sup>&deg;</sup>C
        </>
    );
  };
  
  export default Temperature;