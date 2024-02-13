import styled from 'styled-components';

export const ForecastContainer = styled.section.attrs(() => ({
    className: 'uk-margin uk-animation-slide-left',
}))`
`;

export const ForecastItems = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;

    > :last-child {
      margin-right: 0;
    }
`;

export const ForecastItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-weight: 600;
      font-size: 1.125rem;
      color: #4581c5;
    }

    svg {
      width: 4rem;
      height: 4rem;
      margin: 0.7rem 0;
    }

    p {
      font-weight: 980;
      font-size: 1.3rem;
      color: var(--tn-text-color);
      width: 7rem;
      text-align: center;
    }

    > :first-child {
      
    }

    > :nth-child(3) {
        margin-bottom: 0;
    }

    > :last-child {
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0px;
    }
`;

export const HighLowContainer = styled.p`
    text-align: center;

    span{
      margin: 0 2px;
    }
`;