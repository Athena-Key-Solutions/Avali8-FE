
const confirmPassword = require('./Cadastro');

test('confirm passwords', () => {
  expect(confirmPassword("senha","senha").toBe("Welcome to Avali8!"));
});