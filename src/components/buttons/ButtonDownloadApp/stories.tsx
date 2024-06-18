import ButtonDownloadApp from '.'


export default {
    title:'ButtonDownloadApp',
		component: ButtonDownloadApp,
		parameters: {
			backgrounds: {
					values: [
							{
									name:'primary',
									value:'#000'
							}
					]
			}
	}

}

export const Template = () =>
<div>
	<ButtonDownloadApp/>
</div>
;
