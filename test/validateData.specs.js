const assert = require('chai').assert;
global.window = global;
require('../src/js/validateData.js');

//Validar cálculo de tarifa y saldo Bip
describe('Calcular tarifa', () => { //Describe lo que habrá dentro de cada función
    describe('calculate', () => {
        it('debería ser una función', () => {
            assert.equal(typeof calculate, 'function'); 
        });

        it('Debería retornar 40 para saldo inicial 800 con tarifa alta 760', () => {
          assert.equal(calculate(800, 760), 40);
      });
});
});

//Validar número de serie de tarjeta Bip
describe('Validar número tarjeta Bip', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar la cantidad de números de la tarjeta Bip', () => {
      it('La tarjeta debería tener máximo 8 números', () => {
          assert.equal(validateCard(12345678), true);
          assert.equal(validateCard(12345), true);
      });

      it('La tarjeta debería tener solo números', () => {
        assert.equal(validateCard("abcdefgh"), false);
        assert.equal(validateCard("39fh94j9"), false);
        assert.equal(validateCard(12345678), true);
    });
});
});

