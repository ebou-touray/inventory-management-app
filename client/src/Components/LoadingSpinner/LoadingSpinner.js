import React from 'react';

import FadeLoader from "react-spinners/FadeLoader";

import LoadingSpinnerWrapper from './LoadingSpinner.styles';

const LoadingSpinner = () => (
  <LoadingSpinnerWrapper>
    <FadeLoader color={'#616161'} size={50} />
  </LoadingSpinnerWrapper>
);

export default LoadingSpinner;
