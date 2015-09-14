var gulp         = require('gulp');
var ngTemp       = require('gulp-angular-templatecache');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var stream       = require('streamqueue');
var bowerFiles   = require('main-bower-files');
var ngAnnotate   = require('gulp-ng-annotate');

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
};

// Build

gulp.task('build', ['index', 'js', 'css']);

// Builds

gulp.task('index', function() {
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir));
});

gulp.task('js', function() {
  stream(
    {objectMode: true},
    gulp.src(bowerFiles()),
    gulp.src(paths.src.js)
      .pipe(babel())
      .pipe(ngAnnotate()),
    gulp.src(paths.src.temps)
      .pipe(ngTemp())
  )
    .pipe(concat(paths.dest.js))
    .pipe(gulp.dest(paths.dest.dir));
});

gulp.task('css', function() {
  gulp.src(paths.src.css)
    .pipe(concat(paths.dest.css))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest.dir));
});

// Watch

gulp.task('watch', function() {
  gulp.watch(paths.src.index, ['index']);
  gulp.watch(paths.src.js,    ['js']);
  gulp.watch(paths.src.temps, ['js']);
  gulp.watch(paths.src.css,   ['css']);
});

// Default

gulp.task('default', ['watch']);
