import ButtonBackPage from './index';

export default {
	title:'Buttons/ButtonBackPage',
	component: ButtonBackPage,
}

//Borda para visualização no storybook
export const Default = () => <ButtonBackPage style={{ border: '1px solid black' }} />;
