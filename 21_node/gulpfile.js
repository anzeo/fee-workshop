var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function(){
    return gulp.src(['**/*.ts', '!node_modules/**/*'])
        .pipe(ts({
            module: 'commonjs',
            moduleResolution: 'node'
        }))
        .pipe(gulp.dest('./'));
});