import styled from 'styled-components';

export const PageContainer = styled.div.attrs(() => ({
    className: 'uk-container uk-position-relative',
}))`
    
`;

export const AppContainer = styled.main.attrs(() => ({
    className: 'uk-container uk-container-small uk-animation-scale-up',
}))`

    border-radius: 20px;
    padding: 0px 30px 30px 30px;
    /*margin-bottom: 40px;*/

    > :first-child {
        padding: 0px;
    }

    > section {
        background: rgb(29,147,235);
        background: linear-gradient(150deg, rgba(29,147,235,0.7) 0%, rgba(11,12,30,0.7) 0%, rgba(13,28,54,0.7) 56%);
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0 10px 10px 5px black;
        overflow: hidden;
    }

    > :last-child {
        margin-bottom: 0;
    }

    @media (min-width: 640px) {
        > section {
            padding: 30px;
        }
    }
`;

export const SectionTitle = styled.h3`
    font-weight: 500;
    font-size: 1.125rem;
    color: rgb(33, 99, 151);
    display: flex;
    align-items: center;

    &.uk-text-large  {
        font-size: 1.5rem;
    }
    
    > :last-child {
        margin-left: 10px;
    }
`;

export const Overlay = styled.div.attrs(() => ({
    id:'loading_overlay',
    className:'uk-hidden'
}))`
    position: absolute;
    top: 0;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
