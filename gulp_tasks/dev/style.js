const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('style_dev_docs', function() {
	return gulp.src('./src/docs/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('src/docs/public/css'))
	.pipe(reload({stream:true}));
});

gulp.task('style_dev_theme', function() {
	return gulp.src('./src/theme/sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({ extname: '.min.css' }))
	.pipe(gulp.dest('src/theme/public/css'))
	.pipe(reload({stream:true}));
});