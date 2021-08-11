import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.button_primary_color};
    color: ${({ theme }) => theme.button_text_color};
    width: 7rem;
    font-size: 0.8rem;
    height: 3rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:hover {
      background-color: ${({ theme }) => theme.button_hover};
    }

    @media (min-width: 600px) {
      font-size: 1rem;
      width: 8rem;
      height: 4rem;
    }
  }
`;
