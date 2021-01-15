export default {
	name: 'resource',
	title: 'Resource',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
            name: 'links',
            title: 'Links',
            type: 'reference',
            to: [{type: 'platform'}]
		},
	],
};
