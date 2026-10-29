#!/usr/bin/env node
import { valorPorMetroQuadrado, formatarReais } from './calculo.js';

const [valor, area] = process.argv.slice(2).map((v) => Number(v.replace(',', '.')));

if (process.argv.length < 4) {
  console.error('Uso: node cli.js <valor-do-imovel> <area-construida-m2>');
  console.error('Ex.: node cli.js 450000 72.5');
  process.exit(1);
}

try {
  const resultado = valorPorMetroQuadrado(valor, area);
  console.log(`Valor por m²: ${formatarReais(resultado)}`);
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
  process.exit(1);
}
