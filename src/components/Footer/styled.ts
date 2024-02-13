import styled from 'styled-components';

export const FooterContainer = styled.footer`
    /*
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    */
    width: 100%;
    display: flex;
    justify-content: center;

    p {
        text-align: center;
        color: var(--tn-primary);
    }
    i {
        font-size: 15px;
        margin: 7px;
        color: var(--tn-primary);
    }
`;

export const PortfolioLink = styled.a.attrs(() => ({
    'href':'https://tomnikoloff.github.io/',
}))`
    color: #fff;
    font-weight: 600;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #681dfd;
        transform: translateY(-2px);
        text-decoration: none;
    }
`;