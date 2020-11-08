import styled from "styled-components";
import { colors } from "../style/globalStyle";

export const Title = styled.h1`
  color: ${colors.font_primary_color};
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  text-shadow: 5px 5px 0px rgba(156, 39, 176, 0.85);
  letter-spacing: 1rem;

  p {
    font-size: 2.5rem;
    margin-left: 1rem;
    overflow: hidden;
    border-right: 0.3rem solid #9c27b0;
    white-space: nowrap;
    animation: typing 1.5s steps(16, end), blink-caret 0.9s step-end infinite;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 37rem;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #9c27b0;
      }
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 6rem;
    }
  }
`;
