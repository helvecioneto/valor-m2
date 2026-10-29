import { test } from 'node:test';
import assert from 'node:assert/strict';
import { valorPorMetroQuadrado } from './calculo.js';

test('calcula o valor por m² de um caso simples', () => {
  assert.equal(valorPorMetroQuadrado(500000, 100), 5000);
});

test('arredonda para 2 casas decimais', () => {
  assert.equal(valorPorMetroQuadrado(100000, 3), 33333.33);
});

test('aceita área com casas decimais', () => {
  assert.equal(valorPorMetroQuadrado(450000, 72.5), 6206.9);
});

test('rejeita área zero ou negativa', () => {
  assert.throws(() => valorPorMetroQuadrado(300000, 0), RangeError);
  assert.throws(() => valorPorMetroQuadrado(300000, -50), RangeError);
});

test('rejeita valor do imóvel zero ou negativo', () => {
  assert.throws(() => valorPorMetroQuadrado(0, 80), RangeError);
  assert.throws(() => valorPorMetroQuadrado(-1, 80), RangeError);
});

test('rejeita entradas não numéricas', () => {
  assert.throws(() => valorPorMetroQuadrado(NaN, 80), TypeError);
  assert.throws(() => valorPorMetroQuadrado(300000, '80'), TypeError);
  assert.throws(() => valorPorMetroQuadrado(Infinity, 80), TypeError);
});
