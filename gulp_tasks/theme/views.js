// theme_views
// Compile EJS views to HTML the theme folder root ('theme/')

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const log = require('fancy-log');
const replace = require('gulp-replace-path');

gulp.task('theme_views',function(){
	var myReg = /<a([^>]*?)href\s*=\s*(['"])([^\2]*?)\2\1*>/i;
	return gulp.src('src/theme/*.ejs')
	.pipe((replace(/href\s*=\s*(['"])\/(.*?)(['"])/g,'href="./$2.html"')))
	.pipe(replace("./.html", "index.html"))
	.pipe(ejs({ asset: function(assetLoc){ return assetLoc; }, convertType: ".html"}, {}, { ext: '.html' }).on('error', log))
	.pipe(gulp.dest('./Evie'))
});