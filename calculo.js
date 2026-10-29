function validarPositivo(numero, nome) {
  if (!Number.isFinite(numero)) {
    throw new TypeError(`Informe um número válido para ${nome}.`);
  }
  if (numero <= 0) {
    throw new RangeError(`${nome[0].toUpperCase()}${nome.slice(1)} deve ser maior que zero.`);
  }
}

function arredondar(numero) {
  return Math.round(numero * 100) / 100;
}

/**
 * Calcula o valor do imóvel por metro quadrado.
 * @param {number} valorImovel - Valor total do imóvel em R$.
 * @param {number} area - Área em m² (construída ou do terreno).
 * @returns {number} Valor por m², arredondado em 2 casas decimais.
 */
export function valorPorMetroQuadrado(valorImovel, area) {
  validarPositivo(valorImovel, 'o valor do imóvel');
  validarPositivo(area, 'a área');
  return arredondar(valorImovel / area);
}

/**
 * Calcula a área de um terreno retangular a partir da frente e do fundo.
 * @param {number} frente - Medida da frente em metros.
 * @param {number} fundo - Medida do fundo (profundidade) em metros.
 * @returns {number} Área em m², arredondada em 2 casas decimais.
 */
export function areaDoTerreno(frente, fundo) {
  validarPositivo(frente, 'a frente');
  validarPositivo(fundo, 'o fundo');
  return arredondar(frente * fundo);
}

export function formatarReais(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatarArea(valor) {
  return `${valor.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} m²`;
}
