const suma = require('../src/suma.js');

test('La función suma debe sumar correctamente', () => {
  expect(suma(2, 3)).toBe(5);
  expect(suma(-1, 1)).toBe(0);
  expect(suma(10, 20)).toBe(30);
});
