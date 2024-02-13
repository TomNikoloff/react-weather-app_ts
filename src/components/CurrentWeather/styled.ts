import styled from 'styled-components';

export const WeatherContainer = styled.section.attrs(() => ({
  className: 'uk-margin uk-animation-slide-left',
}))`
`;

export const HelperContainer = styled.section.attrs(() => ({
  className: 'uk-margin uk-animation-slide-right',
}))`
`;

export const UnitSwitcher = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    input:checked + span {
        background-color: rgb(27, 54, 87);
    }

    input:checked + span::before {
        -webkit-transform: translateX(25px);
        -ms-transform: translateX(25px);
        transform: translateX(25px);
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(27, 54, 87);
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
        transition: 0.2s ease-in-out;
        border: 1px solid var(--tn-text-color);
        box-shadow: 0 5px 15px rgba(0,0,0,.08);
        color: #7b98b2;

        &.celcius {
          padding-left: 30px;
        }

        &.fahrenheit {
          padding-left: 7px;
        }
    }  

    span::before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        left: 2px;
        bottom: 2px;
        background-color: var(--tn-text-color);
        -webkit-transition: .4s;
        transition: all .2s ease-in-out;
        border-radius: 50%;
    }

    span:hover::before {
        -webkit-transform: translateX(2px);
        -ms-transform: translateX(2px);
        transform: translateX(2px);
    }
`;

export const LocationDateContainer = styled.div`
  .location {
    color: #7b98b2;
    font-size: 32px;
    font-weight: 500;
  }
  .date {
    color: #7b98b2;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
  }
`;

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 2rem;
    text-align: left;
    color: rgb(33, 99, 151);
    text-transform: capitalize;
    margin: 15px 0 0 0;
  }
`;

export const CurrentTemperature = styled.div`
    font-size: 6rem;
    font-family: roboto, sans-serif;
`;

export const FeelsLike = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    color: #4a6fa1;
    margin-bottom: 1rem;
`;

export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 2rem;
`;

export const HightLowItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: #3a86ca;
  margin-top: 0.8rem;
  margin-right: 2.5rem;
  
  i {
    margin-right: 1rem;
  }
`;

export const ExtraInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  font-weight: 600;

  div {
    display: flex;
    align-items: center;
    width: 8rem;
  }
  i {
    margin-right: 1rem;
    width: 1.6rem;
  }
  span {
    color: #3080c8;
    font-weight: 900;
    font-size: 1rem;
  }
`;

export const ErrorContainer = styled.div.attrs(() => ({
  className: 'uk-flex uk-flex-middle',
}))`
`;

export const ErrorIcon = styled.i.attrs(() => ({
  className: 'bi bi-exclamation-octagon',
}))`
`;

export const ErrorMessage = styled.div.attrs(() => ({
  className: 'uk-margin-left'
}))`
`;

export const InfoContainer = styled.div.attrs(() => ({
  className: 'uk-flex uk-flex-middle',
}))`
`;

export const InfoIcon = styled.i.attrs(() => ({
  className: 'bi bi-info-circle uk-margin-right',
}))`
`;

export const InfoMessage = styled.div.attrs(() => ({
  className: ''
}))`
`;