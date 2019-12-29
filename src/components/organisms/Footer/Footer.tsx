import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  children?: any;
}

const Footer: FunctionComponent<Props> = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/Crownie/new-year-countdown">Github</a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 15px;
  z-index: 20;
  a {
    color: #5a5a5a;
    text-decoration: none;
    :hover {
      color: #fff;
    }
  }
`;
