'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = info;
exports.default = JsModule;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The core module of this library
 *
 * @module js-module-boilerplate
 */

/**
 * Returns the module name
 *
 * @return {string} module name
 */
function info() {
  return 'JS Module Boilerplate';
}

/**
 * Create an instance of {@link module:js-module-boilerplate~jsModule}
 *
 * @return {Object} the core library object
 */
function JsModule() {
  return (0, _create2.default)(jsModule);
}

/**
 * The core module object created by the factory.
 *
 * @type {Object}
 */
var jsModule = {};