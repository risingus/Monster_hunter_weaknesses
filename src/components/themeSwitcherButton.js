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
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 2rem;
`;

const StyledDiv = styled.div`
  pointer-events: none;
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
      direction: isDarkTheme ? -1 : 1,
      segments: isDarkTheme ? [0, 20] : [20, 0],
    });
    setDarkTheme(!isDarkTheme);
  };

  return (

    <ThemeSwitcherButton type="button" onClick={() => changeTheme()}>
      <StyledDiv>
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
      </StyledDiv>
    </ThemeSwitcherButton>
  );
};
