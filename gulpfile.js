var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var concat        = require('gulp-concat');
var ngTemp        = require('gulp-angular-templatecache');
var babel         = require('gulp-babel');
var stream        = require('streamqueue');

var paths = {
  src: {
    index: 'src/index.html',
    js:    'src/**/*.js',
    temps: ['src/**/*.html', '!src/index.html'],
    css:   'src/**/*.css',
  },
  dest: {
    js:  'index.js',
    css: 'index.css',
    dir: 'app/',
  },
}


// Builds

gulp.task('index', function(){
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.dir))
});

gulp.task('js', function(){
  stream(
    { objectMode: true },
    gulp.src(paths.src.js),
    gulp.src(paths.src.temps)
      .pipe(ngTemp({standalone: true}))
  )
    .pipe(babel())
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
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.css, ['css']);
});


// Default

gulp.task('default', ['watch']);
