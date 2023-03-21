/* eslint-disable global-require */
/* windi.config.ts */

import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

// define basic theme
const theme = {
  extends: {
    colors: {
      primary: colors.blue,
      secondary: colors.gray,
      accent: colors.pink,
      neutral: colors.coolGray,
    },
  },
};

export default defineConfig({
  theme,
  darkMode: 'class', // see: https://windicss.org/features/dark-mode.html
  extract: {
    include: ['src/**/*.{vue,ts}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    // see: https://windicss.org/plugins/typography.html
    require('daisyui'),
  ],
});
