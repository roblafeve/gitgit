var gulp         = require('gulp'),
    ngTemp       = require('gulp-angular-templatecache'),
    autoprefixer = require('gulp-autoprefixer'),
    babel        = require('gulp-babel'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    stream       = require('streamqueue'),
    bowerFiles   = require('main-bower-files'),
    ngAnnotate   = require('gulp-ng-annotate');

var paths = {
  src: {
    index: 'src/index.html',
    js:    ['src/**/*.js', '!src/**/*.spec.js'],
    temps: ['src/**/*.html', '!src/index.html'],
    css:   'src/**/*.css',
  },
  dest: {
    js:  'index.js',
    css: 'index.css',
    dir: 'app/',
  },
}


// Build

gulp.task('build', ['index', 'js', 'css']);


// Builds

gulp.task('index', function(){
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir))
});

gulp.task('js', function(){
  stream(
    { objectMode: true },
    gulp.src(bowerFiles()),
    gulp.src(paths.src.js)
      .pipe(babel())
      .pipe(ngAnnotate()),
    gulp.src(paths.src.temps)
      .pipe(ngTemp())
  )
    .pipe(concat(paths.dest.js))
    .pipe(gulp.dest(paths.dest.dir))
});

gulp.task('css', function(){
  gulp.src(paths.src.css)
    .pipe(concat(paths.dest.css))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest.dir))
});


// Watch

gulp.task('watch', function(){
  gulp.watch(paths.src.index, ['index']);
  gulp.watch(paths.src.js,    ['js']);
  gulp.watch(paths.src.temps, ['js']);
  gulp.watch(paths.src.css,   ['css']);
});


// Default

gulp.task('default', ['watch']);
