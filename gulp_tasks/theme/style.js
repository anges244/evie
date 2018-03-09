// theme_style
// Compile and export both minified and unminified theme SASS to the theme CSS ('theme/css/')

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const flexibility = require('postcss-flexibility');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('theme_style', function() {
	const plugins = [ autoprefixer({browsers: ['last 2 versions','ie 9']}), cssnano() ];
	return gulp.src('./src/theme/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([flexibility]))
	.pipe(gulp.dest('Evie/css'))
	.pipe(postcss(plugins))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('Evie/css'))
});