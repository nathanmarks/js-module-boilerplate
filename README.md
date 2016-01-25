# JS Module Boilerplate
[![Build Status](https://img.shields.io/circleci/project/nathanmarks/js-module-boilerplate/master.svg?style=flat-square)](https://circleci.com/gh/nathanmarks/js-module-boilerplate)
[![Coverage Status](https://img.shields.io/coveralls/nathanmarks/js-module-boilerplate/master.svg?style=flat-square)](https://coveralls.io/github/nathanmarks/js-module-boilerplate?branch=master)
[![npm](https://img.shields.io/npm/v/js-module-boilerplate.svg?style=flat-square)]()
[![Dependency Status](https://david-dm.org/nathanmarks/js-module-boilerplate.svg?style=flat-square)](https://david-dm.org/nathanmarks/js-module-boilerplate)

#### Features

- ES6/7 via Babel 6
- Documentation via jsdoc (WIP)
- eslint
- testing via tape/blue-tape
- coverage using isparta

#### Installation

```bash
$ npm install js-module-boilerplate --save
```

---

# API Reference

<a name="module_js-module-boilerplate"></a>
## js-module-boilerplate
The core module of this library


* [js-module-boilerplate](#module_js-module-boilerplate)
    * [exports.info()](#exp_module_js-module-boilerplate.info--exports.info) ⇒ <code>string</code> ⏏
    * [exports.default()](#exp_module_js-module-boilerplate.default--exports.default) ⇒ <code>Object</code> ⏏
    * _inner_
        * [~jsModule](#module_js-module-boilerplate..jsModule) : <code>Object</code>


-----

<a name="exp_module_js-module-boilerplate.info--exports.info"></a>
### exports.info() ⇒ <code>string</code> ⏏
Returns the module name

**Kind**: Exported function
**Returns**: <code>string</code> - module name

-----

<a name="exp_module_js-module-boilerplate.default--exports.default"></a>
### exports.default() ⇒ <code>Object</code> ⏏
Create an instance of [jsModule](#module_js-module-boilerplate..jsModule)

**Kind**: Exported function
**Returns**: <code>Object</code> - the core library object

-----

<a name="module_js-module-boilerplate..jsModule"></a>
### js-module-boilerplate~jsModule : <code>Object</code>
The core module object created by the factory.

**Kind**: inner constant of <code>[js-module-boilerplate](#module_js-module-boilerplate)</code>

-----

