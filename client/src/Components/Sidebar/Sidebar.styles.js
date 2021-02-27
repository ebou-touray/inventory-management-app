import styled from 'styled-components';

const SidebarWrapper = styled.div`
  inventorySidebar {
    z-index: 1000;
    background: #2d3446;
    width: 280px;
    flex: 0 0 280px;
  }

  @media only screen and (max-width: 767px) {
    width: 240px !important;
    flex: 0 0 240px !important;
  }

  &.ant-layout-sider-collapsed {
    @media only screen and (max-width: 767px) {
      width: 0;
      min-width: 0 !important;
      flex: 0 0 0 !important;
    }
  }
`;

export default SidebarWrapper;
