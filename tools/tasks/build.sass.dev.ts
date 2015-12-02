import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';

export = function buildSassDev(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
      .pipe(plugins.cssGlobbing({
        extensions: ['.scss'],
        ignoreFolders: ['../../components/app'],
        scssImportPath: {
          leading_underscore: true,
          filename_extension: false
        }
      }))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(APP_DEST));
  };
}
