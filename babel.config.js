module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				extensions: [
					'.ios.js',
					'.android.js',
					'.ios.jsx',
					'.android.jsx',
					'.js',
					'.jsx',
					'.json',
					'.ts',
					'.tsx',
				],
				root: ['.'],
				alias: {
					'@assets': './src/assets',
					'@components': './src/components',
					'@dto': './src/dto',
					'@i18n': './src/i18n',
					'@redux': './src/redux',
					'@navigation': './src/navigation',
					'@scenes': './src/scenes',
					'@services': './src/services',
					'@theme': './src/theme',
					'@utils': './src/utils',
					'@types': './src/types',
					'@options': './src/options',
					'@env': './src/env.js',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
