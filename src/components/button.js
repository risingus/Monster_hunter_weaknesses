import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
  && {
    background-color: #9c27b0;
    color: white;
    width: 7rem;
    font-size: 0.8rem;
    height: 3rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:hover {
      background-color: #7b1fa2;
    }

    @media (min-width: 600px) {
      font-size: 1rem;
      width: 8rem;
      height: 4rem;
    }
  }
`;
