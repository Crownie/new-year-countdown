import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components';
import Countdown from '../../molecules/Countdown/Countdown';
import BubblesBackground from '../../molecules/BubblesBackground/BubblesBackground';
import NewYearGreeting from '../../molecules/NewYearGreeting/NewYearGreeting';
import CountdownNav from '../../molecules/CountdownNav/CountdownNav';
import moment from 'moment';

interface Props {
  date: string;
}

const CountdownContainer: FunctionComponent<Props> = ({ date }) => {
  const defaultDate = `${new Date().getFullYear() + 1}-01-01`;
  let targetMoment = moment(date, 'YYYY-MM-DD');
  if (!targetMoment.isValid()) {
    targetMoment = moment(defaultDate, 'YYYY-MM-DD');
  }
  const targetDate = targetMoment.utc(false).toDate();
  const [ended, setEnded] = useState(false);
  const handleEnd = useCallback(() => {
    setEnded(true);
  }, []);

  return (
    <StyledWrapper>
      {!ended && <BubblesBackground />}
      {ended && <NewYearGreeting />}
      {!ended && <Countdown targetDate={targetDate} onEnd={handleEnd} />}
      <CountdownNav targetDate={targetDate} />
    </StyledWrapper>
  );
};

export default CountdownContainer;

const StyledWrapper = styled.div`
  font-family: Arial;
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

const isValidDate = date => {
  return (
    new Date(date).toString() !== 'Invalid Date' &&
    !isNaN(new Date(date).getTime())
  );
};

const getGmtOffsetString = () => {
  const m = new Date().toString().match(/GMT.\d{4}/);
  return m ? m[0] : '';
};

const appendGmtOffset = (dateStr: string) => {
  return dateStr + ' ' + getGmtOffsetString();
};
