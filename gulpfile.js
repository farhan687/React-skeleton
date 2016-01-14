var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function() {
	var b = browserify({
		entries: ['src/main.js'],
		debug: true
	});
	b.transform(reactify); // use the reactify transform
	return b.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['browserify']);
	gulp.watch('src/*.jsx', ['browserify']);
});

gulp.task('default', ['watch','browserify']);