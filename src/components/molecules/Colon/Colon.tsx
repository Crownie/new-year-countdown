import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/media-query';

interface Props {
  children?: any;
}

const Colon: FunctionComponent<Props> = () => {
  return <StyledWrapper>:</StyledWrapper>;
};

export default Colon;

const StyledWrapper = styled.div`
  font-size: 8em;
  color: #787878;
  font-family: Arial;
  margin-left: 20px;
  margin-right: 20px;

  @media ${device.mobileS} {
    & {
      font-size: 2em;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  @media ${device.mobileM} {
    & {
      font-size: 3em;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  @media ${device.mobileL} {
    & {
      font-size: 4em;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  @media ${device.tablet} {
    & {
      font-size: 6em;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 15px;
    }
  }

  @media ${device.laptop} {
    & {
      font-size: 6em;
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 25px;
    }
  }
`;
