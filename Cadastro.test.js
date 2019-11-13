
/*const confirmPassword = require('./cadastro');

test('Se as duas senhas forem iguais, deve retornar -Welcome to Avali8-', () => {
  expect(confirmPassword('123','123')).toBe('Welcome to Avali8');
});*/

const verifyInput = require('./cadastro');

test('Se receber tudo vazio deve retornar falso',() =>{
  expect(verifyInput("","","","","")).toBe(false);
}
);