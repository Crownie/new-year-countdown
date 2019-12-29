import React, { FunctionComponent } from 'react';
import FireworksBackground from '../../atoms/FireworksBackground/FireworksBackground';
import styled from 'styled-components';
import { device } from '../../../utils/media-query';

interface Props {
  children?: any;
}

const NewYearGreeting: FunctionComponent<Props> = () => {
  return (
    <StyledWrapper>
      <FireworksBackground />
      <StyledText>Happy New Year !</StyledText>
    </StyledWrapper>
  );
};

export default NewYearGreeting;

const StyledWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #0f0f1d;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(1) {
    z-index: 1;
  }
  & > div:nth-child(2) {
    z-index: 2;
  }
`;

const StyledText = styled.div`
  text-align: center;
  font-size: 4em;
  color: #fff;
  padding: 15px;

  @media ${device.laptop} {
    & {
      font-size: 7em;
    }
  }
`;
