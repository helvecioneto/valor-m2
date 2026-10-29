import { test } from 'node:test';
import assert from 'node:assert/strict';
import { valorPorMetroQuadrado, areaDoTerreno } from './calculo.js';

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

test('calcula a área do terreno pela frente e fundo', () => {
  assert.equal(areaDoTerreno(10, 30), 300);
  assert.equal(areaDoTerreno(12.5, 25), 312.5);
});

test('valor por m² do terreno a partir de frente e fundo', () => {
  assert.equal(valorPorMetroQuadrado(450000, areaDoTerreno(10, 30)), 1500);
});

test('rejeita frente ou fundo zero, negativo ou inválido', () => {
  assert.throws(() => areaDoTerreno(0, 30), RangeError);
  assert.throws(() => areaDoTerreno(10, -5), RangeError);
  assert.throws(() => areaDoTerreno(NaN, 30), TypeError);
});
