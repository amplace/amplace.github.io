const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    sitemap = require('gulp-sitemap');

gulp.task('previewDocs', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "."
        }
    });
});

gulp.task('deleteDocs', () => {
    return del('./assets');
});

gulp.task('copyGeneralFiles', () => {
    return gulp.src('./app/assets/includes/**/*')
        .pipe(gulp.dest('./assets/includes'));
});

gulp.task('optimizeImages', () => {
    return gulp.src(['./app/assets/img/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./assets/img'));
});

gulp.task('sitemap', ['usemin'], () => {
    gulp.src('./*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://amplace.co.il/'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('usemin', ['deleteDocs', 'styles', 'scripts'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [() => {
                return rev()
            }, () => {
                return cssnano()
            }],
            js: [() => {
                return rev()
            }, () => {
                return uglify()
            }]
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['deleteDocs', 'copyGeneralFiles', 'optimizeImages', 'usemin', 'sitemap']);
