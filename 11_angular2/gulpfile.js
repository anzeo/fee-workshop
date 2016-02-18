var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function(){
    gulp.src(['app/*.ts', 'typings/**/*'])
        .pipe(ts({
            module: 'system',
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true
        }))
        .pipe(gulp.dest('./app/'));
});

gulp.task('default', ['ts'], function(){
   gulp.watch('app/*.ts', ['ts']);
});