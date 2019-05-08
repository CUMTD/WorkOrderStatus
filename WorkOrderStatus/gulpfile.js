/// <binding ProjectOpened='watch' />
const gulp = require('gulp');

const fs = require('fs');
const path = require('path');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mQPacker = require('css-mqpacker');

const clear = require('clear');

const jsDest = path.join(__dirname, 'js');
const cssDest = path.join(__dirname, 'css');

const cssPath = [
	path.join(__dirname, 'scss/*.scss'),
	`!${path.join(__dirname, 'scss/**/_*.scss')}`
];

// decide if we are in dev or production mode
const devMode = (() => {
	let dev = true;
	const i = process.argv.indexOf('--production');
	if (i > -1) {
		dev = false;
	}
	return dev;
})();

const getWebpackStream = () => {
	// get the appropriate config file
	const conf = devMode ?
		require('./wp-dev.webpack') :
		require('./wp-prod.webpack');
		// we want to use the version of webpack installed by yarn
	return webpackStream(conf, require('webpack'));
};

const scripts = () => gulp
	.src('WE DO NOT WANT TO MATCH ANYTHING HERE', { allowEmpty: true }) // we use a custom config file webpack.config.js
	.pipe(plumber())
	.pipe(getWebpackStream())
	.pipe(gulp.dest(jsDest));
scripts.flags = {
	'--production': 'Puts build into production mode'
};

const css = () => gulp
	.src(cssPath, { cwd: true })
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(
		sass()
			.on('error', sass.logError))
	.pipe(postcss([
		mQPacker,
		autoprefixer({
			browsers: [
				'> 1% in US',
				'not ie <= 11'
			],
			flexbox: false,
			grid: false
		}),
		cssnano({
			autoprefixer: false
		})
	]))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(cssDest));

const build = gulp.parallel(scripts, css);
build.description = 'Build scripts and css.';
build.flags = {
	'--production': 'Puts build into production mode'
};

const clearConsole = () => clear();

const watchChanges = () => {
	gulp.watch('scss/**/*.scss', gulp.series(clearConsole, css));
	gulp.watch(['ts/**/*.tsx', 'ts/**/*.ts'], gulp.series(clearConsole, scripts));
};
watchChanges.displayName = 'watch';

const watch = gulp.series(build, watchChanges);
watch.description = 'Build then watch files for changes';
watch.flags = {
	'--production': 'Puts build into production mode'
};

exports.css = css;
exports.scripts = scripts;
exports.clear = clearConsole;
exports.build = build;
exports.watch = watch;
exports.default = build;
