const assert = require('chai').assert;
global.window = global;
require('../src/js/main');

describe('Validar contraseña', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar la cantidad de números de la contraseña', () => {
        it('La contraseña debería tener máximo 8 números', () => {
            assert.equal(validatePassword(12345678), true);
            assert.equal(validatePassword(12345), true);
        });

        it('La contraseña debería tener solo números', () => {
          assert.equal(validatePassword("abcdefgh"), false);
          assert.equal(validatePassword("39fh94j9"), false);
      });
  
});
});