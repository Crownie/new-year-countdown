import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/media-query';

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
    font-size: 2em;
    color: #d6d6d6;
  }

  .label {
    color: #bebebe;
  }

  @media ${device.mobileS} {
    .digits {
      font-size: 2em;
    }
    .label {
      font-size: 0.5em;
    }
  }

  @media ${device.mobileM} {
    .digits {
      font-size: 4em;
    }
    .label {
      font-size: 0.7em;
    }
  }

  @media ${device.mobileL} {
    .digits {
      font-size: 4em;
    }
    .label {
      font-size: 0.7em;
    }
  }

  @media ${device.tablet} {
    .digits {
      font-size: 8em;
    }
    .label {
      font-size: 0.9em;
    }
  }

  @media ${device.laptop} {
    .digits {
      font-size: 10em;
    }
    .label {
      font-size: 0.9em;
    }
  }
`;

function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
