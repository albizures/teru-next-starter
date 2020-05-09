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
			message:
				'Do you want to use tailwind?',
		},
		typescript: {
			defaultValue: true,
			message:
				'Do you want to use typescript?',
		},
	},
	files: [
		'LICENSE',
		'package.json',
		'src/pages/_app.js',
		'src/pages/_app.tsx',
		{
			onlyWhen: { typescript: true },
			filename: [
				'index.tsx',
				'_app.tsx',
				'tsconfig.json',
				'next-env.d.ts',
			],
		},
		{
			onlyWhen: { typescript: false },
			filename: ['index.js', '_app.js'],
		},
		{
			onlyWhen: { tailwind: true },
			filename: [
				'postcss.config.js',
				'tailwind.config.js',
				'src/styles.css',
			],
		},
	],
};
