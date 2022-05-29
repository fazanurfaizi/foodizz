module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react-hooks'],
	extends: [
		'@react-native-community',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'ordered-imports': 0,
	},
	overrides: [
		{
			files: ['src/**/*.{ts,tsx}'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				// 'plugin:@typescript-eslint/recommended-requiring-type-checking', // @TODO: Commented due the chaining-optional-operator bug: https://github.com/typescript-eslint/typescript-eslint/issues/2728
			],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-inferrable-type': 'off',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': ['warn'],
				'no-extra-boolean-cast': 'off',
				// All the @typescript-eslint/* rules here...
				'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'warn',
				'@typescript-eslint/prefer-optional-chain': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'warn',
				'@typescript-eslint/no-shadow': ['warn'],
				'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
				'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
				'no-shadow': 'off',
				"no-tabs": ["error", {"allowIndentationTabs": true}]
			},
			parser: '@typescript-eslint/parser',
			parserOptions: {
				tsconfigRootDir: './',
				project: './tsconfig.json',
			},
		},
	],
};
