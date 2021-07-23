import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { colors } from '../style/globalStyle';

export const StyledButton = styled(Button)`
  && {
    background-color: ${colors.button_primary_color};
    color: ${colors.font_primary_color};
    width: 7rem;
    font-size: 0.8rem;
    height: 3rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:hover {
      background-color: ${colors.button_hover};
    }

    @media (min-width: 600px) {
      font-size: 1rem;
      width: 8rem;
      height: 4rem;
    }
  }
`;
