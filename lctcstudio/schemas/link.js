export default {
	name: 'link',
	title: 'Link',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
		},
	],
};
