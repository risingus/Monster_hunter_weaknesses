import { shade } from 'polished';

export const lightTheme = {
  font_primary_color: '#212121',
  background_primary_color: 'white',
  button_primary_color: '#9c27b0',
  button_hover: '#7b1fa2',
  text_shadow: `3px 3px 0px ${shade(0.2, '#9c27b0')}`,
  title_text_shadow: `5px 5px 0px ${shade(0.2, '#9c27b0')}`,
};

export const darkTheme = {
  font_primary_color: 'white',
  background_primary_color: '#212121',
  button_primary_color: '#9c27b0',
  button_hover: '#7b1fa2',
  text_shadow: `3px 3px 0px ${shade(0.2, '#9c27b0')}`,
  title_text_shadow: `5px 5px 0px ${shade(0.2, '#9c27b0')}`,
};
