import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', (cb) => {
	return runSequence(
		'del',
		'upload',
		cb
	);
});

