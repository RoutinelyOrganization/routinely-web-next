
import ButtonEdit from '../ButtonEdit';


export default {
    title:'ButtonEdit',
		component: ButtonEdit,
		parameters: {
			backgrounds: {
					values: [
							{
									name:'primary',
									value:'#FFFFFF'
							}
					]
			}
	}

}

export const Template = () =>
<div>
	<ButtonEdit/>
</div>
;
