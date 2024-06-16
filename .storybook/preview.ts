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
      default:'primary',
      values: [
        {
          name:'primary',
          value:'#FFF'
        },
      ]
    }
  },
};

export default preview;
