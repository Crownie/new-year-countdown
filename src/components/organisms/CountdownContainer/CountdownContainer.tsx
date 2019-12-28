import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Countdown from '../../molecules/Countdown/Countdown';
import BubblesBackground from '../../molecules/BubblesBackground/BubblesBackground';

interface Props {
  children?: any;
}

const CountdownContainer: FunctionComponent<Props> = () => {
  return (
    <StyledWrapper>
      <BubblesBackground />
      <Countdown />
    </StyledWrapper>
  );
};

export default CountdownContainer;

const StyledWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #0f0f1d;
  display: flex;
  align-items: center;
  justify-content: center;

  & :nth-child(1) {
    z-index: 1;
  }
  & :nth-child(2) {
    z-index: 2;
  }
`;
