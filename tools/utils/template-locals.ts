import {APP_BASE, APP_DEST, APP_TITLE, DIST_PATH, SYSTEM_CONFIG, VERSION} from '../config';

// TODO: Add an interface to register more template locals.
export function templateLocals() {
  return {
    APP_BASE,
    APP_DEST,
    APP_TITLE,
    DIST_PATH,
    SYSTEM_CONFIG,
    VERSION
  };
}
