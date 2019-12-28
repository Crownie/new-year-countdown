import React, { FunctionComponent } from 'react';
import CountdownContainer from '../src/components/organisms/CountdownContainer/CountdownContainer';

interface Props {
  children?: any;
}

const HomePage: FunctionComponent<Props> = () => {
  return (
    <div>
      <CountdownContainer />
    </div>
  );
};

export default HomePage;
