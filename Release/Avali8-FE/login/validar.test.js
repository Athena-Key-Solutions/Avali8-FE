const validar = require('./login');

test('Deve retornar undefined ao receber vazio', () => {
  expect(validar("")).toBe(undefined);
});