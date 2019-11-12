
const confirmPassword = require('./cadastro');

test('Se as duas senhas forem iguais, deve retornar -Welcome to Avali8-', () => {
  expect(confirmPassword('123','123')).toBe('Welcome to Avali8');
});