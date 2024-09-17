import { GlobalStyles } from '@/styles/globalStyles';
import type { IContainerPrevNextProps } from '.';
import ContainerPrevNext from '.';

export default {
  title: 'containers/ContainerPrevNext',
  component: ContainerPrevNext,
  argTypes: {
    onChange: {
      type: 'function',
    },
  },
};

export const Template = (args: IContainerPrevNextProps) => {
  return (
    <div>
      <GlobalStyles />
      <ContainerPrevNext {...args} />
    </div>
  );
};
