require('app-module-path').addPath(__dirname + './../');
const Glob = require('glob');

Glob(`${__dirname}/**/*.spec.js`, {}, (err, files) => {
  files.forEach((file) => require(file));
});

