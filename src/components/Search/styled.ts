import styled from 'styled-components';

export const SearchContainer = styled.section.attrs(() => ({
    'className': 'uk-margin uk-animation-slide-bottom',
}))`

    width: 100%;
    position: relative;
    veritcal-align: middle;
    -webkit-backface-visibility: hidden;
`;

export const SearchButton = styled.a.attrs(() => ({
    'uk-icon': 'icon: search;',
    'href':'#'
}))`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        transform:translateY(-2px);
        color: #7b98b2;
    }
`;

export const SearchBar = styled.input`
    display: block;
    width: 100%;
    padding: 15px 15px 15px 40px;

    appearance: none;
    background: none;
    border: none;
    outline: none;

    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

    color: #fff;
    font-size: 20px;

    transition: 0.4s ease;
    
    &:focus {
        color: #fff;
        background: rgb(29,147,235);
        background: linear-gradient(150deg, rgba(29,147,235,0.7) 0%, rgba(11,12,30,0.7) 0%, rgba(13,28,54,0.7) 56%);
    }
`;

export const LocationButton = styled.a.attrs(() => ({
    'uk-icon': 'icon: location;',
    'href':'#'
}))`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        transform:translateY(-2px);
        color: #7b98b2;
    }
`;