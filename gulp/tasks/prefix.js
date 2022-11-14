import prefix from "gulp4-prefix";

gulp.task('prefix', function(){
    const  prefixUrl = "gorkiflowers/";
   
    gulp.src('index.html')
      .pipe(prefix(prefixUrl, null, '{{'))
      .pipe(gulp.dest('build'));
  });