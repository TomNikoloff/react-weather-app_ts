import styled from 'styled-components';

export const ForecastContainer = styled.section.attrs(() => ({
  className: 'uk-margin uk-animation-slide-right',
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

export const ForecastDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
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
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--tn-text-color);
    }
    span {
      font-size: 1.125rem;
      color: var(--tn-text-color);
      width: 5rem;
      text-align: center;
    }
`;

export const ForecastItemContainer = styled.div`
    min-width: 75px;
    font-weight: 800;

    >:last-child {
      font-weight: 600;
    }

    div {
      display: flex;
      justify-content: center;
    }
`;