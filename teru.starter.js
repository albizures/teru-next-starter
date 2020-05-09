module.exports = {
	tokens: {
		licenseYear: {
			defaultValue: new Date().getFullYear(),
		},
		author: {
			message: "What's your name?",
		},
		projectName: {
			message: 'How are you calling this new project?',
		},
		email: {
			message: "What's your email?",
		},
		prettier: {
			defaultValue: true,
			message: 'Do you want to use Prettier',
		},
		tailwind: {
			defaultValue: true,
			message: 'Do you want to use Tailwind CSS?',
		},
		typescript: {
			defaultValue: true,
			message: 'Do you want to use Typescript?',
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
