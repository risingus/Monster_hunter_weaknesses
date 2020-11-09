import styled from "styled-components";
import { colors } from "../style/globalStyle";

export const Results = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  color: ${colors.font_primary_color};

  h1 {
    text-shadow: 3px 3px 0px rgba(156, 39, 176, 0.85);
    letter-spacing: 1rem;
    font-size: 2.5rem;
  }

  img {
    width: 40px;
  }

  p {
    font-size: 1.3rem;
  }
`;
