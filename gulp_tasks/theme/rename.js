const gulp = require('gulp');
const fs = require('fs');

gulp.task('theme_rename',function(done){
	fs.rename('theme', 'Evie',function(err){
		if (err){ throw err; }
		done();
	});
});