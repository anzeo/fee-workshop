var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function(){
    return gulp.src('*.ts')
        .pipe(ts({
            module: 'commonjs'
        }))
        .pipe(gulp.dest('./'));
});