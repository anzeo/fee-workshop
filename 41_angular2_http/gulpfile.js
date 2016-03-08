var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');

gulp.task('serve', ['ts'], function(done) {
    browserSync({
        open: false,
        port: 9000,
        server: {
            baseDir: ['.'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);

    gulp.watch('app/*.ts', ['ts']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('ts', function(){
    gulp.src(['app/*.ts', 'typings/**/*'])
        .pipe(ts({
            module: 'system',
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);