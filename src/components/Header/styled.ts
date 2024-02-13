import styled from 'styled-components';

export const HeaderContainer = styled.header.attrs(() => ({
    className: 'uk-animation-slide-top uk-container uk-container-small uk-flex uk-flex-between uk-flex-middle',
}))`

    padding: 30px 0 10px 0;
`;

export const PortfolioLogoLink = styled.a.attrs(() => ({
    'href':'https://tomnikoloff.github.io/',
}))`
    /*
    &:hover {
        box-shadow: 0 28px 100px 25px #000;
    }
    */
`;

export const Logo = styled.img`
    height: 80px;

    &:hover {
        transition: 0.2s ease-in-out;
        -webkit-transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);

    }
`;

export const LinkTitleContainer = styled.div.attrs(() => ({
    className: 'uk-flex uk-flex-middle',
}))`

    a {
        margin-right: 20px;
    }
`;

export const Title = styled.h1`
    color: var( --tn-secondary);
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 500;
`;

export const GithubLogoLink = styled.a.attrs(() => ({
    'href':'https://github.com/TomNikoloff/react-weather-app',
}))`
    transition: 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }
`;

export const GithubLogo = styled.i.attrs(() => ({
    className: 'bi bi-github',
}))`
    transition: 0.2s ease-in-out;
    
    &:hover {
        color: var(--tn-primary);
    }
`;

export const TitleWrap = styled.br`
    @media (min-width: 500px) {
        display: none;
    }
`;