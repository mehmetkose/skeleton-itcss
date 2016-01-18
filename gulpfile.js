'use strict';

var gulp = require('gulp');
var concat  = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');

var settings = require('./package.json');

var scss_files = [
    'scss/base/base.scss',
    'scss/components/components.scss',
    'scss/generic/generic.scss',
    'scss/objects/objects.scss',
    'scss/settings/settings.scss',
    'scss/tools/tools.scss',
    'scss/trumps/trumps.scss'
]
gulp.task('scss-task', function () {
    return gulp.src(scss_files)
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true}).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
    gulp.watch(["scss/*/*.scss"], ['scss']);
});

gulp.task('default', ['scss-task','watch'])