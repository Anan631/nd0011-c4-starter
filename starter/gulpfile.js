import gulp from 'gulp';
import shell from 'gulp-shell';

// Task لتشغيل Parcel
gulp.task('parcel', shell.task('npx parcel index.html'));

// Task افتراضي يشغل Parcel عند كتابة
gulp.task('default', gulp.series('parcel'));

// Task لتشغيل اختبارات Mocha
gulp.task('test', shell.task('npx mocha'));

// Task لتشغيل اختبارات Cypress
gulp.task('cypress', shell.task('npx cypress run'));
