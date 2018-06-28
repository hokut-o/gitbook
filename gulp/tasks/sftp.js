import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import sftp from 'gulp-sftp';

gulp.task('del', () => {
	return del([
		'./_book/gulp',
		'./_book/gulpfile.babel.js',
		'./_book/package.json',
		'./_book/sftpconfig.json',
		'./_book/yarn.lock',
		'./_book/.gitignore',
		'./_book/**/.DS_Store',
	], {force: true});
});

gulp.task('upload', function() {
	return gulp.src([
		'_book/**/*' // アップロードしたいファイルを指定
	])
	.pipe(sftp({
			host: "160.16.141.210",
			port: "54321",
			user: "helpnet",
			pass: "B0zpRn4N1Z",
			remotePath: "/home/helpnet/public_html/manual/"
		})
	);
});

gulp.task('default', (cb) => {
	return runSequence(
		'del',
		'upload',
		cb
	);
});

