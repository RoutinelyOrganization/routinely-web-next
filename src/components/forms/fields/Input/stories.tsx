import type { IInput } from '.';
import Input from '.';

export default {
  title: 'forms/fields/Input',
  component: Input,
};

export const Default = (args: IInput) => {
  return (
    <div>
      <Input {...args} />
    </div>
  );
};

export const TemplateWithLabel = (args: IInput) => {
  return (
    <div>
      <Input label="Email" placeholder="" {...args} />
    </div>
  );
};

export const TemplateWithErrorMessage = (args: IInput) => {
  return (
    <div>
      <Input label="Email" placeholder="" hasError errorMessage="Email inválido" {...args} />
    </div>
  );
};

export const TemplateWithChild = (args: IInput) => {
  args.children = <p style={{ margin: 0 }}>Teste</p>;
  return (
    <div>
      <Input label="Email" placeholder="" {...args} />
    </div>
  );
};

TemplateWithLabel.parameters = {
  docs: {
    description: {
      story: 'Para ter o efeito do label deve-se colocar o placeholder com ou sem valor',
    },
  },
};
