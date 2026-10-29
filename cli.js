#!/usr/bin/env node
import { valorPorMetroQuadrado, areaDoTerreno, formatarReais, formatarArea } from './calculo.js';

const args = process.argv.slice(2);
const numero = (v) => Number(v.replace(',', '.'));

if (args.length < 2) {
  console.error('Uso: node cli.js <valor-do-imovel> <area-construida-m2> [terreno-m2 | frenteXfundo]');
  console.error('Ex.: node cli.js 450000 72.5 300');
  console.error('     node cli.js 450000 72.5 10x30');
  process.exit(1);
}

try {
  const valor = numero(args[0]);
  const construida = numero(args[1]);
  console.log(`Valor por m² construído: ${formatarReais(valorPorMetroQuadrado(valor, construida))}`);

  if (args[2]) {
    const [frente, fundo] = args[2].toLowerCase().split('x').map(numero);
    const terreno = fundo === undefined ? frente : areaDoTerreno(frente, fundo);
    console.log(`Área do terreno: ${formatarArea(terreno)}`);
    console.log(`Valor por m² do terreno: ${formatarReais(valorPorMetroQuadrado(valor, terreno))}`);
  }
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
  process.exit(1);
}
