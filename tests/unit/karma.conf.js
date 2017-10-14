module.exports = function (config) {
	config.set({
		frameworks: ['mocha', 'sinon-chai', 'fixture'],
		files: [
			// Matchig all js files in all subfolders
			'../../src/assets/js/*.js',
			// Matching all specs files
			'./specs/*.spec.js',
			'./specs/support/fixtures/**/*'
		],
		exclude: [
			'./node_modules',
			'../../src/assets/js/*.min.js',
		],
		preprocessors: {
			// Coverage all js files in all subfolders
      '../../src/assets/js/*.js': ['babel', 'coverage'],
			'specs/*.spec.js': ['rollup', 'coverage'],
			// 'specs/example.spec.js': ['rollup', 'coverage'],
			'specs/support/fixtures/**/*.html': ['html2js'],
			'specs/support/fixtures/**/*.json': ['json_fixtures']
		},
		babelPreprocessor: {
			options: {
				"presets": ["es2015"],
				"plugins": ["transform-es2015-modules-umd"]
			}
		},

		rollupPreprocessor: {
			plugins: [
				require('rollup-plugin-mockr')(),
				require('rollup-plugin-commonjs')(),
				require('rollup-plugin-node-resolve')()
			],
			format: 'iife'
		},

		jsonFixturesPreprocessor: {
			variableName: '__json__'
		},
		reporters: [
			'mocha',
			// 'progress',
			'coverage'
		],
		// webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true
		},
		browsers: ['MyHeadlessChrome'],

		customLaunchers: {
			MyHeadlessChrome: {
				base: 'ChromeHeadless',
				flags: [
					'--headless',
					'--disable-gpu',
					// Without a remote debugging port, Google Chrome exits immediately.
					'--remote-debugging-port=9222',
				],
			}
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{type: 'lcov', subdir: '.'},
				{type: 'text-summary'}
			]
		}
	})
}
