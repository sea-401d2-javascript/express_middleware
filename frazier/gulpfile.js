'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

var lintPaths = [__dirname + '/test/*.js', __dirname + '/lib/*.js', __dirname + '/module.js'];

gulp.task('eslint', () => {
  gulp.src(lintPaths)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', ['eslint'], () => {
  console.log('got here');
  gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(lintPaths, ['test']);
});

gulp.task('default', ['test'], function(){
  console.log('running default tasks');
});
