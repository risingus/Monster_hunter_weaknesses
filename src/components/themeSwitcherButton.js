import React from 'react';
import styled from 'styled-components';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';

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

const StyledMoon = styled(NightsStayIcon)`
&& {
  color: ${({ theme }) => theme.button_primary_color};
  font-size: 2rem;
  margin-top: 1rem;
}
  
`;

const StyledSun = styled(Brightness5Icon)`
&& {
  color: ${({ theme }) => theme.button_primary_color};
  font-size: 2rem;
  margin-top: 1rem;
}
  
`;

// eslint-disable-next-line react/prop-types
export const SwitchButton = ({ setDarkTheme, isDarkTheme }) => {
  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (

    <ThemeSwitcherButton type="button" onClick={() => changeTheme()}>
      <StyledDiv>
        {!isDarkTheme ? (<StyledMoon />) : (<StyledSun />) }
      </StyledDiv>
    </ThemeSwitcherButton>
  );
};
