import styled from 'styled-components';

export const DashboardStatsWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-flow: row wrap;
  margin-bottom: 40px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ImsWidgetWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  align-items: center;
  background-color: #fff;
`;

export const ImsIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 20px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  background-color: ${(props) => props.background};
  justify-content: center;
`;

export const ImsWidget = styled.div`
  h3 {
    color: #707070;
    font-size: 14px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  span {
    color: #707070;
    font-size: 20px;
    font-weight: 700;
  }
`;