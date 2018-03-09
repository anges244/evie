// docs_style
// Compile and export minified theme + docs SASS to the docs CSS ('docs/css/')

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const flexibility = require('postcss-flexibility');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');

gulp.task('docs_style', function(){
	return gulp.src('./src/docs/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([flexibility,autoprefixer({browsers: ['last 2 versions','ie 9']}), cssnano()]))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('docs/css'))
});