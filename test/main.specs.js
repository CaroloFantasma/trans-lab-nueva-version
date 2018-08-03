const assert = require('chai').assert;
global.window = global;
require('../src/js/main');

describe('Validar contraseña', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar que la contraseña sea solo de números', () => {
        it('La contraseña debería tener solo 8 números', () => {
            assert.equal(validateEmail("12345678"), true);
            assert.equal(validateEmail("abcdefgh"), false);
            assert.equal(validateEmail("39fh94j9"), false);
        });
  
    
});
});