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
  backgrounds: { default: 'secondary' },
};

