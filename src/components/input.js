import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 11rem;
  background-color: transparent;
  color: ${({ theme }) => theme.font_primary_color};
  height: 3rem;
  font-size: 1rem;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom-color: ${({ theme }) => theme.button_hover};

  &::placeholder {
    color: ${({ theme }) => theme.title_text_color};
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
