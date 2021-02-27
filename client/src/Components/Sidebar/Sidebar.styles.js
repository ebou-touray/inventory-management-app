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

  .inventoryHolder {
    display: flex;
    align-items: center;

    i {
      font-size: 19px;
      color: inherit;
      width: 18px;
    }
  }

  .anticon {
    font-size: 18px;
    margin-right: 30px;
    color: inherit;
  }

  .nav-text {
    font-size: 14px;
    color: inherit;
    font-weight: 400;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
  .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, .4);
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: rgba(255, 255, 255, .4);
  }
`;

export default SidebarWrapper;
