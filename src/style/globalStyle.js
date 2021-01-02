import { createGlobalStyle } from "styled-components";

export const colors = {
  font_primary_color: "white",
  background_primary_color: "#212121",
  button_primary_color: "#9c27b0",
  button_hover: "#7b1fa2",
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background-color: ${colors.background_primary_color};
        font-family: 'Roboto', sans-serif;
    }   
`;
