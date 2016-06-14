'use strict';

var gulp = require('gulp');
var concat  = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');

var settings = require('./package.json');

var scss_files = [
    'app/scss/base/base.scss',
    'app/scss/components/components.scss',
    'app/scss/generic/generic.scss',
    'app/scss/objects/objects.scss',
    'app/scss/settings/settings.scss',
    'app/scss/tools/tools.scss',
    'app/scss/trumps/trumps.scss'
]
gulp.task('scss', function () {
    return gulp.src(scss_files)
        .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('watch', function () {
    gulp.watch(["app/scss/*/*.scss"], ['scss']);
});

gulp.task('default', ['scss','watch'])