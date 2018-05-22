/*var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//task para o sass
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

//task para o default
gulp.task('default', function(){

});
*/
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
	return gulp.src('sass/**/*.sass').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('css'));
});

//task para o watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

//task para o gulp
gulp.task('default', ['sass', 'watch']);