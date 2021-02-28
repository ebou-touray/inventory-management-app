import styled, { createGlobalStyle } from 'styled-components';

export const DashboardGlobalStyles = createGlobalStyle`
  body {
    -webkit-overflow-scrolling: touch;
  }
`;


export const DashboardWrapper = styled.div`
  &.contentMainLayout {
    overflow: auto;
    overflow-x: hidden;

    @media only screen and (min-width: 768px) and (max-width: 1220px) {
      width: calc(100% - 80px);
      flex-shrink: 0;
    }

    @media only screen and (max-width: 767px) {
        width: 100%;
        flex-shrink: 0;
      }
    }
  }

  .imsLayoutContent {
    width: 100%;
    height: 100%;
    padding: 35px;
    background: #fff;
  }
`;
