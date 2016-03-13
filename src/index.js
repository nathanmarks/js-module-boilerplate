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
export function info () {
  return 'JS Module Boilerplate';
}

/**
 * Create an instance of {@link module:js-module-boilerplate~jsModule}
 *
 * @return {Object} the core library object
 */
export default function JsModule () {
  return Object.create(jsModule);
}

/**
 * The core module object created by the factory.
 *
 * @type {Object}
 */
const jsModule = {};
