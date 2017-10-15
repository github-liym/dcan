var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    htmlBeautify = require('gulp-html-beautify'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-Sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),

  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');


gulp.task('sass',function(){
    gulp.src(['src/assets/scss/**/*.scss'])
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions','> 5%','Firefox < 20','> 5% in US','ie 9'],
            cascade: false,
            remove:false
        }))
        .pipe(gulp.dest('src/assets/css'))
        .pipe(gulp.dest('dist/assets/css'));
});

// include
gulp.task('fileinclude', function() {
  gulp.src(['src/**/*.html','!src/components/**.html'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
      .pipe(htmlBeautify({
          indent_size: 4,
          indent_char: ' ',
          unformatted: true,
            extra_liners: []
      }))
    .pipe(gulp.dest('dist'));
});

gulp.task('changed', function() {
  return gulp.src(['src/assets/**/*','!src/assets/css','!src/assets/css/**/*','!src/assets/scss','!src/assets/scss/**/*'])
    .pipe(plumber())
    .pipe(changed('dist/assets'))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch',function () {
  gulp.watch(['src/assets/scss/**/*.scss'],['sass']);
  gulp.watch(['src/assets/**/*','!src/assets/scss/**/*','!src/assets/css/**/*'],['changed']);
  gulp.watch(['src/**/*.html'],['fileinclude']);
});

gulp.task('browser-sync',['watch'],function(){
    browserSync.init({
        files: ['dist/**/*.html','dist/assets/**/*'],
        proxy: 'localhost:82'
    });
});

gulp.task('default',['browser-sync','watch','sass']);