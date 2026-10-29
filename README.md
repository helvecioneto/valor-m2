# Valor por m²

Calcula o valor por metro quadrado de um imóvel a partir do **valor do imóvel**, da **área construída** e, opcionalmente, do **terreno** (área total ou frente × fundo).

```
valor por m² construído = valor do imóvel ÷ área construída
área do terreno         = frente × fundo
valor por m² do terreno = valor do imóvel ÷ área do terreno
```

## Usar no navegador

Acesse: https://helvecioneto.github.io/valor-m2/

Ou abra localmente (precisa de um servidor, por causa dos módulos JS):

```bash
npx serve .
```

## Usar no terminal

```bash
node cli.js 450000 72.5          # só área construída
node cli.js 450000 72.5 300      # + área do terreno
node cli.js 450000 72.5 10x30    # + frente × fundo
# Valor por m² construído: R$ 6.206,90
# Área do terreno: 300 m²
# Valor por m² do terreno: R$ 1.500,00
```

## Testes

```bash
npm test
```

Os testes usam o test runner nativo do Node (`node:test`), sem dependências. Rodam automaticamente no GitHub Actions a cada push.

## Estrutura

| Arquivo | O que faz |
|---|---|
| `calculo.js` | Funções `valorPorMetroQuadrado()` e `areaDoTerreno()` com validação das entradas |
| `calculo.test.js` | Testes unitários |
| `index.html` | Página web com o formulário |
| `cli.js` | Versão de linha de comando |
