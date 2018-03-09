const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const nodemon = require('gulp-nodemon');
require('dotenv').config(); // Load environment variables

/*--- Load Gulp subtasks ---*/
const requireDir = require('require-dir');
requireDir('./gulp_tasks',{recurse: true});

// Helper function for reloading Nodemon + Server
function reloader(done) {
	browserSync.reload();
	done();
};

// Nodemon => Initialize express server with nodemon
gulp.task('nodemon', function (cb) {
	var called = false;
	return nodemon({
		script: 'app.js',
		ignore: [
			'gulpfile.js',
			'node_modules/',
			'public/',
			'bower_components/',
			'vendor/'
		]
	})
	.on('start', function () {
		if (!called) {
			called = true;
			cb();
		}
	})
	.on('restart', function () {
		setTimeout(function () {
			reload({ stream: false });
		}, 1000);
	});
});

// Browser-Sync => Start and sync the browser when changes happen
gulp.task('browser-sync',
	gulp.parallel('nodemon',
		function initServer() {
			browserSync({
				proxy: "localhost:3000",  // local node app address
				port: 7000,  // use *different* port than above
				notify: false
			});
		},
		function watcher(done) {
			// EJS and HTML Watcher
			gulp.watch(['src/*.ejs', 'src/**/*.ejs'],  gulp.parallel(reloader));
			// SASS / CSS Watchers
			gulp.watch(['src/theme/sass/**/*.scss','src/theme/sass/*.scss'], gulp.parallel('style_dev_theme'));
			gulp.watch(['src/theme/sass/**/*.scss','src/theme/sass/*.scss','src/docs/sass/**/*.scss','src/docs/sass/*.scss'], gulp.parallel('style_dev_docs'));
			// JS Watcher
			gulp.watch(['src/theme/js/**/*.js'],gulp.parallel('scripts_dev_theme'));
			gulp.watch(['src/theme/js/**/*.js', 'src/docs/js/**/*.js'],gulp.parallel('scripts_dev_docs'));
		}
	)
);

/*--- Main Gulp Tasks---*/
gulp.task('default', 
	gulp.series('clean',
		gulp.parallel('scripts_dev_docs','scripts_dev_theme','style_dev_docs','style_dev_theme'),
		'browser-sync'
	)
);

// Build => Production-ready theme folder to upload (Default build)
gulp.task('build',
	gulp.series( 'theme_assets',
		gulp.parallel('theme_style', 'theme_scripts', 'theme_views'))
);

// Build docs => Production-ready documents to upload (build_docs)
gulp.task('build_docs',
	gulp.series('docs_clean',  'docs_assets',
		gulp.parallel('docs_style', 'docs_scripts', 'docs_views'),
		'build','zip', 'zip_docs','theme_clean')
);