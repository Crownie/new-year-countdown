import React, { FunctionComponent } from 'react';
import Digit from '../Digit/Digit';
import styled from 'styled-components';
import Colon from '../Colon/Colon';
import useTimeLeft from './useTimeLeft';

interface Props {
  onEnd: () => void;
  targetDate: Date;
}

const Countdown: FunctionComponent<Props> = ({ onEnd, targetDate }) => {
  const { days, hours, minutes, seconds } = useTimeLeft(targetDate);

  const showDays = days > 0;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    onEnd();
  }

  return (
    <StyledWrapper>
      <div>
        {showDays && <Digit value={days} label={'DAYS'} />}
        {showDays && <Colon />}
        <Digit value={hours} label={'HOURS'} />
        <Colon />
        <Digit value={minutes} label={'MINUTES'} />
        <Colon />
        <Digit value={seconds} label={'SECONDS'} />
      </div>
    </StyledWrapper>
  );
};

export default Countdown;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
  }
`;
