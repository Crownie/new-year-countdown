import React, { FunctionComponent, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import dynamic from 'next/dist/next-server/lib/dynamic';

interface Props {
  children?: any;
}

let BubblesBackground: FunctionComponent<Props> = () => {
  const initialBubbles = Array.apply(null, Array(5)).map(() => {
    const diameter = Math.random() * 50 + 20;
    const bottom = Math.random() * 800;
    const left = `calc(${Math.random()}*100%)`;
    return {
      width: diameter,
      height: diameter,
      bottom,
      left,
      duration: '1s',
    };
  });
  const [bubbles, setBubbles] = useState(initialBubbles);

  useEffect(() => {
    if(bubbles.length>0){
      document.addEventListener(whichAnimationEvent(), (event) => {
        const elm = event.target;
        const newone = elm.cloneNode(true);
        newone.style.bottom = 0;
        newone.style.animationDuration = (Math.random() * 2000 + 3000)+'ms';
        elm.parentNode.replaceChild(newone, elm);
      });
    }
  }, []);

  console.log('render');

  return (
    <StyledWrapper>
      {bubbles.map(({ duration, ...style }, index) => (
        <StyledBubble
          duration={duration}
          className="bubble"
          key={index}
          style={style}
        />
      ))}
    </StyledWrapper>
  );
};

// BubblesBackground = React.memo(BubblesBackground);
// disable ssr
export default dynamic(() => Promise.resolve(BubblesBackground), {
  ssr: false,
});

const FloatUp = keyframes`
  from{
    
  }
 
  to{
    bottom:120%;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledBubble = styled(({ duration, ...props }) => <div {...props} />)`
    background: teal;
    opacity: .5;
    position: fixed;
    border-radius: 100%
    height: 30px;
    width: 30px;
    animation: ${FloatUp} 1s linear;
`;

function whichAnimationEvent() {
  let t,
    el = document.createElement('fakeelement');

  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  console.log(el);
  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}
