import React from 'react';

import { LayoutContentWrapper } from './styles/layoutWrapper.styles';

export default props => (
  <LayoutContentWrapper {...props}>
    {props.children}
  </LayoutContentWrapper>
);
