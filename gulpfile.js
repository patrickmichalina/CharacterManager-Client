var gulp = require('gulp');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var htmlreplace = require('gulp-html-replace');
var replace = require('gulp-replace');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');


gulp.task('bundle', function (cb) {
	var Builder = require('systemjs-builder');
	var builder = new Builder();
	builder.reset();

	builder.loadConfig("./config.js")
		.then(function () {
			return builder.buildSFX("app", "dist/build.min.js", { minify: false })
				.then(function () { // Inject minified script into index
					return gulp.src('dist/index.html')
						.pipe(htmlreplace({ 'js': 'build.min.js' }))
						//.pipe(htmlreplace({ 'js': cdn + '/app/build.min.js' }))
						.pipe(minifyHTML())
						.pipe(gulp.dest('dist/'));
				});
		})
		.then(function () {
			cb();
		})
		.catch(function (err) {
			console.log(err);
			cb(err);
		});
});

gulp.task('index', function () {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('basic-bundle', function () {
	return gulp.src(['favicon.ico', 'robots.txt'])
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./",
		middleware: [historyApiFallback()],
		browser: "google chrome",
		files: ["./app/**/*.*"]
    });
});

gulp.task('md-icons', function(){
	return gulp.src(['jspm_packages/*/material-design-iconic-font*/dist/fonts/**.*'], { "base" : "." })
		.pipe(gulp.dest('dist'));
});

gulp.task('images', function(){
	return gulp.src('app/images/**/**.*')
		.pipe(gulp.dest('dist/app/images'));
});

gulp.task('compress', function() {
  return gulp.src('dist/build.min.js')
	//.pipe(replace('url(jspm', 'url(' + cdn + '/app/jspm'))
	//.pipe(replace('app/images', cdn + '/app/images'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});



gulp.task('dist', 
	gulp.series('index', 
		gulp.parallel('bundle', 'basic-bundle', 'images', 'md-icons'), 
		'compress'));

gulp.task('serve-dist',
	gulp.series('dist', function () {
		browserSync.init({
			server: "./dist",
			middleware: [historyApiFallback()],
			browser: "google chrome",
			minify: true
		})})
);

gulp.task('default', gulp.series('serve'));