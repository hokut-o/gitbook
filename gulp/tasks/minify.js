import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminPng from 'imagemin-pngquant';
import imageminJpg from 'imagemin-jpeg-recompress';
import imageminGif from 'imagemin-gifsicle';

gulp.task('imgMin', () => {
	return gulp.src('./_book/.gitbook/assets/*.+(jpg|jpeg|png|gif)')
	.pipe(imagemin([
		imageminPng(),
		imageminJpg(),
		imageminGif()
	]))
	.pipe(imagemin())
	.pipe(gulp.dest('./build'));
});