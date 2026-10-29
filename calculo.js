/**
 * Calcula o valor do imóvel por metro quadrado.
 * @param {number} valorImovel - Valor total do imóvel em R$.
 * @param {number} areaConstruida - Área construída em m².
 * @returns {number} Valor por m², arredondado em 2 casas decimais.
 */
export function valorPorMetroQuadrado(valorImovel, areaConstruida) {
  if (!Number.isFinite(valorImovel) || !Number.isFinite(areaConstruida)) {
    throw new TypeError('Informe valores numéricos válidos.');
  }
  if (valorImovel <= 0) {
    throw new RangeError('O valor do imóvel deve ser maior que zero.');
  }
  if (areaConstruida <= 0) {
    throw new RangeError('A área construída deve ser maior que zero.');
  }
  return Math.round((valorImovel / areaConstruida) * 100) / 100;
}

export function formatarReais(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
