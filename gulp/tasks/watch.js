var gulp = require('gulp'),
watch = require('gulp-watch'),
broswerSynch = require('browser-sync').create();

gulp.task('watch', function() {

    broswerSynch.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        broswerSynch.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
     .pipe(broswerSynch.stream());
 });