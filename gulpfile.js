import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';

const sass = gulpSass(sassCompiler);

function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}

export default gulp.parallel(styles, images);