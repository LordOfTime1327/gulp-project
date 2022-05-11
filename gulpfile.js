// packages import
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const browsersync = require('browser-sync').create()
const del = require('del')
const uglifyES = require('gulp-uglify-es').default
const webpackStream = require('webpack-stream')

// Pathes to src files and pathes to dist files
const paths = {
  styles: {
    src: ['src/scss/**/*.scss'],
    dest: 'dist/css/'
  },
  scripts: {
    src: ['src/js/**/*.js'],
    dest: 'dist/js/'
  },
  images: {
    src: 'src/img/**',
    dest: 'dist/img/'
  }
}

// Clear dist folder, except images
function clean() {
  return del(['dist/*', '!dist/img'])
}

// Processing css preprocessors
function styles() {
  return gulp.src(paths.styles.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(rename({
    basename: 'style',
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(browsersync.stream())
}

// Processing JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(webpackStream({
      mode: 'none',
      output: {
        filename: 'script.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {targets: "defaults"}]
                ]
              }
            }
          }
        ]
      }
    }))
    .pipe(uglifyES())
    .pipe(gulp.dest(paths.scripts.dest))
};

// Image compression
function img() {
  return gulp.src(paths.images.src)
  .pipe(newer(paths.images.dest))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest(paths.images.dest))
}

// Tracking changes in files and running live server
function watch() {
  browsersync.init({
    server: {
        baseDir: "./"
    }
  })
  gulp.watch('./*.html').on('change', browsersync.reload)
  // gulp.watch('./**/*.js').on('change', browsersync.reload)
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts).on('change', browsersync.reload)
  gulp.watch(paths.images.src, img)
}

// Tasks for manual run
exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.img = img
exports.watch = watch

// Automatic tasks 
exports.build = gulp.series(clean, gulp.parallel(styles, scripts, img))
exports.default = gulp.series(clean, gulp.parallel(styles, scripts, img), watch)