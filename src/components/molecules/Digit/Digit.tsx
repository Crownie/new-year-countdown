import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
  label: string;
}

const Digit: FunctionComponent<Props> = ({ value, label }) => {
  const num = pad(value, 2);
  return (
    <StyledWrapper>
      <div className="digits">{num}</div>
      <div className="label">{label}</div>
    </StyledWrapper>
  );
};

export default Digit;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
  .digits {
    font-size: 10em;
    color: #d6d6d6;
  }

  .label {
    color: #bebebe;
  }
`;

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
