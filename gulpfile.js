import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';
import terser from 'gulp-terser';

const sass = gulpSass(sassCompiler);

function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'));
}

export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}

export default gulp.parallel(styles, images, scripts);