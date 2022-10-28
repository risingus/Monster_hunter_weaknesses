import styled from 'styled-components';

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 670px) {
    flex-direction: row;
  }
`;
