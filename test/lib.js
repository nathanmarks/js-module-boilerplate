import Test from 'tape';
import ModuleBoilerplate from 'lib/index.js';

Test('Module', t => {

  t.plan(2);

  t.ok(ModuleBoilerplate, 'Should exist');

  t.equals(
    ModuleBoilerplate(),
    'JS Module Boilerplate',
    'Should be a function that returns the module name'
  );

});
