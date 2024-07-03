import CategorySelect from '.';

export default {
  title: 'CategorySelect',
  component: CategorySelect,
};

export const Template = () => {
  return (
    <div>
      <CategorySelect />
    </div>
  );
};

Template.parameters = {
  backgrounds: {
    default: 'white',
  },
};
