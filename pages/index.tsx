import React, { FunctionComponent } from 'react';
import CountdownContainer from '../src/components/organisms/CountdownContainer/CountdownContainer';
import dynamic from 'next/dist/next-server/lib/dynamic';
import Footer from '../src/components/organisms/Footer/Footer';

interface Props {
  children?: any;
}

const HomePage: FunctionComponent<Props> = () => {
  return (
    <div>
      <CountdownContainer date={getUrlParameter('date')} />
      <Footer />
    </div>
  );
};

// export default HomePage;
export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
