import ButtonDownloadApp from '.';

export default {
  title: 'ButtonDownloadApp',
  component: ButtonDownloadApp,
};

export const Template = () => (
  <div>
    <ButtonDownloadApp />
  </div>
);

Template.parameters = {
  docs: {
    description: {
      component: 'so é reinderizado em telas menores que 500px',
    },
  },
};
