// docs_assets
// Move the necessary images to the docs folder ('docs/assets')

const gulp = require('gulp');

gulp.task('docs_assets', function(done){
	return gulp.src(['src/docs/assets/**/*']).pipe(gulp.dest('docs/')); // Transfer every asset
});