import styled from 'styled-components';

export const Results = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 3rem 1rem;
  color: ${({ theme }) => theme.font_primary_color};

  h1 {
    text-shadow: ${({ theme }) => theme.text_shadow};
    letter-spacing: 1rem;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 1rem;
    font-size: 1.5rem;
    text-shadow: ${({ theme }) => theme.text_shadow};
    letter-spacing: 0.3rem;
  }

  #weak {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 300px;

    p {
      background-color: ${({ theme }) => theme.button_primary_color};
      padding: 0.3rem;
      border: 2px solid ${({ theme }) => theme.font_primary_color};
      border-radius: 0.8rem;
      margin: 0.1rem;
    }
  }

  img {
    width: 8rem;
    margin: 2rem;
  }

  p {
    font-size: 1.3rem;
  }

  #description {
    max-width: 50rem;
    font-weight: bold;
  }
`;
