const assert = require('chai').assert;
global.window = global;
require('../src/js/profile');

describe('Validar número tarjeta Bip', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar la cantidad de números de la tarjeta Bip', () => {
        it('La tarjeta debería tener máximo 8 números', () => {
            assert.equal(validateEmail(12345678), true);
            assert.equal(validateEmail(12345), true);
        });

        it('La tarjeta debería tener solo números', () => {
          assert.equal(validateEmail("abcdefgh"), false);
          assert.equal(validateEmail("39fh94j9"), false);
      });
  
});
});