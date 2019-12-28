import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

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
`;
