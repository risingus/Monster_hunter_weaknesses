import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 11rem;
  background-color: transparent;
  color: white;
  height: 3rem;
  font-size: 1rem;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom-color: ${({ theme }) => theme.button_hover};

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    flex: 1;
    max-width: 25rem;
    font-size: 2rem;
    height: 4rem;
  }
`;
