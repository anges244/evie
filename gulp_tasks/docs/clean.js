// docs_clean => This cleans the documents folder which contains the last version of the evie documentation

const gulp = require('gulp');
const del = require('del');

gulp.task('docs_clean', function(done) {
	return del(['docs/**']);
});