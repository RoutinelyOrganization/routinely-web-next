import { GlobalStyles } from '@/styles/globalStyles';
import ContainerHomePage from '.';

export default {
  title: 'containers/ContainerHomePage',
  component: ContainerHomePage,
  args: {},
  argTypes: {},
};

export const Template = () => {
  return (
    <>
      <GlobalStyles />
      <ContainerHomePage />
    </>
  );
};
