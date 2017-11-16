/// <binding ProjectOpened='watch' />
const gulp = require('gulp');

const fs = require('fs');
const path = require('path');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackConf = require('./webpack.config.js');
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

// build typescript using webpack
gulp.task(
	'scripts',
	() => gulp
		.src('!') // we use webpack.config.js to specify our entry points
		.pipe(plumber())
		.pipe(webpackStream(webpackConf, webpack))
		.pipe(gulp.dest(jsDest)));

gulp.task('css', () => {
	const processors = [
		mQPacker,
		autoprefixer({
			browsers: [
				'> 1% in US',
				'not ie <= 10'
			],
			flexbox: 'no-2009',
			grid: true
		}),
		cssnano({
			autoprefixer: false
		})
	];

	return gulp
		.src(cssPath)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(
		sass()
			.on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(cssDest));
});

gulp.task('build', ['scripts', 'css']);

gulp.task('default', ['build']);

gulp.task('clear', () => clear());

gulp.task('watch', ['build'], () => {
	gulp.watch('scss/**/*.scss', ['clear', 'css']);
	gulp.watch(['ts/**/*.tsx', 'ts/**/*.ts'], ['clear', 'scripts']);
});