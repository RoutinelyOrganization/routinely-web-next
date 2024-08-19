import ButtonDownloadApp from '.';

export default {
  title: 'buttons/ButtonDownloadApp',
  component: ButtonDownloadApp,
};

export const Template = () => (
  <div>
    <ButtonDownloadApp />
  </div>
);

Template.parameters = {
  backgrounds: { default: 'secondary' },
  docs: {
    description: {
      component: 'so é reinderizado em telas menores que 500px',
    },
  },
};
