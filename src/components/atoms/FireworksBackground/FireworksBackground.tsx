import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dist/next-server/lib/dynamic';
import Rocket from './helpers/Rocket';

interface Props {
  children?: any;
}

const FireworksBackground: FunctionComponent<Props> = () => {
  let SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    MAX_PARTICLES = 400,
    colorCode = 0;

  const canvasRef = useRef<HTMLCanvasElement>();
  let rockets = [];

  const launch = () => {
    const x = Math.random() * SCREEN_WIDTH;
    if (rockets.length < 10) {
      const rocket = new Rocket(x, SCREEN_HEIGHT);
      rocket.explosionColor = Math.floor((Math.random() * 360) / 10) * 10;
      rocket.vel.y = Math.random() * -3 - 4;
      rocket.vel.x = Math.random() * 6 - 3;
      rocket.size = 8;
      rocket.shrink = 0.999;
      rocket.gravity = 0.01;
      rockets.push(rocket);
    }
  };

  const loop = canvas => {
    const context = canvas.getContext('2d');

    // update screen size
    if (SCREEN_WIDTH != window.innerWidth) {
      canvas.width = SCREEN_WIDTH = window.innerWidth;
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
      canvas.height = SCREEN_HEIGHT = window.innerHeight;
    }

    const x = SCREEN_WIDTH / 2;
    const y = SCREEN_HEIGHT / 2;

    // clear canvas
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    const existingRockets = [];

    for (let i = 0; i < rockets.length; i++) {
      // update and render
      rockets[i].update();
      rockets[i].render(context);

      // calculate distance with Pythagoras
      const distance = Math.sqrt(
        Math.pow(x - rockets[i].pos.x, 2) + Math.pow(y - rockets[i].pos.y, 2),
      );

      // random chance of 1% if rockets is above the middle
      const randomChance =
        rockets[i].pos.y < (SCREEN_HEIGHT * 2) / 3
          ? Math.random() * 100 <= 1
          : false;

      /* Explosion rules
                   - 80% of screen
                  - going down
                  - close to the mouse
                  - 1% chance of random explosion
              */
      if (
        rockets[i].pos.y < SCREEN_HEIGHT / 5 ||
        rockets[i].vel.y >= 0 ||
        distance < 50 ||
        randomChance
      ) {
        rockets[i].explode();
      } else {
        existingRockets.push(rockets[i]);
      }
    }

    rockets = existingRockets;

    const existingParticles = [];

    for (let i = 0; i < Rocket.particles.length; i++) {
      Rocket.particles[i].update();

      // render and save particles that can be rendered
      if (Rocket.particles[i].exists()) {
        Rocket.particles[i].render(context);
        existingParticles.push(Rocket.particles[i]);
      }
    }

    // update array with existing particles - old particles should be garbage collected
    Rocket.particles = existingParticles;

    while (Rocket.particles.length > MAX_PARTICLES) {
      Rocket.particles.shift();
    }
  };

  useEffect(() => {
    const SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight,
      mousePos = {
        x: 400,
        y: 300,
      },
      // create canvas
      canvas = canvasRef.current;

    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    setInterval(launch, 800);
    setInterval(() => {
      loop(canvas);
    }, 1000 / 50);

    console.log(canvas);
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

// disable ssr
export default dynamic(() => Promise.resolve(FireworksBackground), {
  ssr: false,
});

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
