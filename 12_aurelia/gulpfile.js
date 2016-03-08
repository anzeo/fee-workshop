var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');

gulp.task('ts', function(){
    return gulp.src(['app/*.ts', 'jspm_packages/**/*.d.ts'])
        .pipe(ts({
            module: 'system',
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            target: 'ES6'
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());    // Notify browserSync AFTER the TypeScript files have been compiled
});

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

gulp.task('default', ['serve']);