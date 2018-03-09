// docs_scripts
// Concat and export both minified and unminified JavaScript files docs folder ('docs/js/')

const gulp = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('docs_scripts', function(){
	var glob = [];
	// Push the theme JS first to concat everything
	glob.push('src/theme/js/libraries/**/*.js');
	glob.push('src/theme/js/app.js');
	// Then the doc specific code
	glob.push('src/docs/js/libraries/**/*.js');
	glob.push('src/docs/js/app.js');
	return gulp.src(glob)
	.pipe(order(['*jquery.min.js*'])) // If jQuery is included, move to the top
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('docs/js'))
});