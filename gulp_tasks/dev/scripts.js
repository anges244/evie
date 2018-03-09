const gulp = require('gulp');
const order = require('gulp-order');
const concat = require('gulp-concat');

gulp.task('scripts_dev_docs', function(){
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
	.pipe(gulp.dest('src/docs/public/js'))
});

gulp.task('scripts_dev_theme', function(){
	var glob = [];
	// Push the theme JS first to concat everything
	glob.push('src/theme/js/libraries/**/*.js');
	glob.push('src/theme/js/app.js');
	return gulp.src(glob)
	.pipe(order(['*jquery.min.js*'])) // If jQuery is included, move to the top
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('src/theme/public/js'))
});