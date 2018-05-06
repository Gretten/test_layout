var gulp = require('gulp');
	less = require('gulp-less'); 
	browserSync = require('browser-sync');


gulp.task('browserSync', function() {
 browserSync({
 server: {
 baseDir: 'app'
 },
  })
})

gulp.task('watch', ['browserSync', 'less'], function(){
  gulp.watch('app/less/**/*.less', ['less']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
 	.pipe(gulp.dest('app/css'))
 	.pipe(browserSync.reload({
 	stream: true
 	}))
});
