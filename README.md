# Valor por m²

Calcula o valor por metro quadrado de um imóvel a partir do **valor do imóvel** e da **área construída**.

```
valor por m² = valor do imóvel ÷ área construída
```

## Usar no navegador

Acesse: https://helvecioneto.github.io/valor-m2/

Ou abra localmente (precisa de um servidor, por causa dos módulos JS):

```bash
npx serve .
```

## Usar no terminal

```bash
node cli.js 450000 72.5
# Valor por m²: R$ 6.206,90
```

## Testes

```bash
npm test
```

Os testes usam o test runner nativo do Node (`node:test`), sem dependências. Rodam automaticamente no GitHub Actions a cada push.

## Estrutura

| Arquivo | O que faz |
|---|---|
| `calculo.js` | Função `valorPorMetroQuadrado()` com validação das entradas |
| `calculo.test.js` | Testes unitários |
| `index.html` | Página web com o formulário |
| `cli.js` | Versão de linha de comando |
