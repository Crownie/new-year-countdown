import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import dynamic from 'next/dist/next-server/lib/dynamic';
import { animated, Keyframes } from 'react-spring/renderprops.cjs'; // https://github.com/react-spring/react-spring/issues/575#issuecomment-469037674
import delay from 'delay';

interface Props {
  children?: any;
}

let BubblesBackground: FunctionComponent<Props> = () => {
  const bubbles = Array.apply(null, Array(10));

  return (
    <StyledWrapper>
      {bubbles.map((sp, index) => {
        const bottom = Math.random() * 50 + '0%';
        return (
          <Content key={index} native>
            {props => (
              <animated.div
                style={{
                  position: 'fixed',
                  bottom,
                  ...props,
                }}
                key={index}
              >
                <StyledBubble key={index} />
              </animated.div>
            )}
          </Content>
        );
      })}
    </StyledWrapper>
  );
};

const Content = Keyframes.Spring(async next => {
  // None of this will cause React to render, the component renders only once :-)
  while (true) {
    const diameter = Math.random() * 150 + 40;
    const bottom = Math.random() * 50 + '0%';
    const left = Math.random() * 100 + '0%';
    const leftTo = Math.random() * 100 + '0%';
    await delay(1000);

    await next({
      bottom: '0%',
      left,
      config: {
        duration: 1,
      },
    });
    await next({
      bottom: '100%',
      width: diameter,
      height: diameter,
      left: leftTo,
      from: {
        width: diameter,
        height: diameter,
        left,
      },
      config: {
        duration: 4000 + Math.random() * 2000,
      },
    });
  }
}) as any;

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

const StyledWrapper = styled(props => <animated.div {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledBubble = styled(({ duration, ...props }) => <div {...props} />)`
    background: teal;
    opacity: .5;
    border-radius: 100%
    height: 100%;
    width: 100%;
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
