import Test from 'blue-tape';
import ModuleBoilerplate from 'src/index.js';

Test('Module', t => {

  t.ok(ModuleBoilerplate, 'Should exist');

  t.looseEquals(
    ModuleBoilerplate(),
    {},
    'Should be a function that returns the module object'
  );

  t.end();

});
