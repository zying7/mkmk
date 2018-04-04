//1将项目中所需要的插件导入项目中
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');
//2.创建并发布任务（测试）
gulp.task('test',function(){
	console.log('hello world');
})
//编译sass并压缩css
gulp.task('sass',function(){
//			找到要处理的文件                                                       调用sass()方法进行编译                                    修改名
	return gulp.src('src/sass/*.scss ').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(cssnano()).pipe(gulp.dest('css'));
})
//压缩js
//gulp.task('script',function(){
//	return gulp.src('src/js/*.js').pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dest('js'));
//})
//监听任务
gulp.task('watch',function(){
	gulp.watch(['src/sass/*.scss'],['sass'])
})
