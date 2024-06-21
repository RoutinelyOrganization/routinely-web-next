import { colors } from './../src/styles/variables';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
		backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: colors.primary,
        },
        {
          name: 'secondary',
          value: colors.secondary,
        },
        {
          name: 'white',
          value: colors.white,
        },
      ],
    },
  },
};

export default preview;
