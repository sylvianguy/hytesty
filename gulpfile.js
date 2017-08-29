const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


//a task to compile our sass
gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles'))
});

//a task to compile our js
gulp.task('scripts', () => {
	return gulp.src('./dev/scripts/main.js')
		.pipe(babel({
			presets: ['es2015'] 
		}))
		.pipe(gulp.dest('./public/scripts'))
});

