import Lottie from 'react-lottie';
import React, { useState } from 'react';
import styled from 'styled-components';
import animationData from '../assets/animations/themeSwitcherAnimation.json';

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ThemeSwitcherButton = styled.button`
   background: transparent;
   border: none;
   cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
export const SwitchButton = ({ setDarkTheme, isDarkTheme }) => {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: true, direction: 1, segments: [0, 20],
  });

  const changeTheme = () => {
    setAnimationState({
      ...animationState,
      isStopped: false,
      isPaused: false,
      direction: animationState.direction === 1 ? -1 : 1,
      segments: animationState.direction === 1 ? [0, 20] : [20, 0],
    });
    setDarkTheme(!isDarkTheme);
  };

  return (

    <ThemeSwitcherButton type="button" onClick={() => changeTheme()}>
      <Lottie
        options={defaultOptions}
        segments={animationState.segments}
        height={80}
        width={80}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
        speed={1.5}
      />
    </ThemeSwitcherButton>
  );
};
