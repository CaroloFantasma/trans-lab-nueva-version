const assert = require('chai').assert;
global.window = global;
require('../src/js/calculate');

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