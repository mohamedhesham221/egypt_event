var gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

//task html
gulp.task('html', function () {
    return gulp.src('./stage/index.html')
        .pipe(gulp.dest("./dist/src/"))
        .pipe(livereload())
})

gulp.task('img', function(){
    return gulp.src('./stage/images/*')
    .pipe(gulp.dest('./dist/'))
})
//task css
gulp.task('css',function() {
    return gulp.src(['./stage/css/**/*.css', './stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/src/css'))
        .pipe(livereload())
})

//task js
gulp.task('js', function(){
    return gulp.src('./stage/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest('./dist/src/js'))
    .pipe(livereload())
})

//task watch
gulp.task("watch", function(){
    require('./server.js');
    livereload.listen();
 gulp.watch('./stage/index.html', gulp.series('html'));
gulp.watch(['./stage/css/**/*.css', './stage/css/**/*.scss'] , gulp.series('css'));
gulp.watch('./stage/js/*.js', gulp.series('js'));

})

