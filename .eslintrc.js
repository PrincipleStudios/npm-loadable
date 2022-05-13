module.exports = {
	root: true,
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname
	},
	ignorePatterns: ['.eslintrc.js', 'node_modules/', 'package*.json'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	plugins: ['prettier'],
	rules: {
		'@typescript-eslint/no-shadow': 0,
		'import/prefer-default-export': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'no-nested-ternary': 0,
		'no-unneeded-ternary': 0,
		'global-require': 0,
		'@typescript-eslint/no-use-before-define': 0
	}
};
