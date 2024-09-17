import type { Preview } from '@storybook/react';
import { colors } from '../src/styles/variables';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
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
    nextjs: {
      appDirectory: true,
    },
    layout: 'fullscreen',
  },
};

export default preview;
