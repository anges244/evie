// theme_clean => This cleans the theme folder which contains the previous theme version

const gulp = require('gulp');
const del = require('del');

gulp.task('theme_clean', function(done) {
	return del(['theme/**', 'Evie/**']);
});