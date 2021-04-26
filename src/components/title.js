import styled from 'styled-components';
import { colors } from '../style/globalStyle';

export const Title = styled.h1`
  color: ${colors.font_primary_color};
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem 1rem 0rem 1rem;
  text-shadow: 5px 5px 0px rgba(156, 39, 176, 0.85);
  letter-spacing: 1rem;

  p {
    font-size: 2rem;
    letter-spacing: 0.5rem;
    margin-left: 1rem;
    overflow: hidden;
    border-right: 0.3rem solid ${colors.button_hover};
    white-space: nowrap;
    animation: typing 1.5s steps(16, end), blink-caret 0.9s step-end infinite;
    max-width: 750px;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 17rem;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: ${colors.button_primary_color}
      }
    }
  }

  @media (min-width: 750px) {
    p {
      font-size: 6rem;
      letter-spacing: 1rem;

      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 45rem;
        }
      }
    }
  }
`;
