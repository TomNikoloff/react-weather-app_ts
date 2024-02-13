import styled from 'styled-components';

export const Toggle = styled.label`
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