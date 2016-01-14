/**
 * Registers the babel runtime transpilation
 * and loads up the library
 */
require('app-module-path').addPath(__dirname);
require('babel.config');
require('lib');
