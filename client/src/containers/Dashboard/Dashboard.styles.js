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
  }

  .imsLayoutContent {
    width: 100%;
    height: 100%;
    padding: 35px;
    background: #fff;
    border-radius: 12px;
  }
`;
