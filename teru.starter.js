module.exports = {
	tokens: {
		license_year: {
			defaultValue: 2020,
		},
		author: {},
		name: {},
		email: {},
		tailwind: {
			defaultValue: true,
			message: 'Do you want to use tailwind?',
		},
		typescript: {
			defaultValue: true,
			message: 'Do you want to use typescript?',
		},
	},
	files: [
		'LICENSE',
		'package.json',
		{
			onlyWhen: { typescript: true },
			filename: [
				'src/pages/index.tsx',
				'src/pages/_app.tsx',
				'tsconfig.json',
				'next-env.d.ts',
			],
		},
		{
			onlyWhen: { typescript: false },
			filename: ['src/pages/index.js', 'src/pages/_app.js'],
		},
		{
			onlyWhen: { tailwind: true },
			filename: ['postcss.config.js', 'tailwind.config.js', 'src/styles.css'],
		},
	],
};
