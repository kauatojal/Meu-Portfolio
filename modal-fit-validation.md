# Validação do modal sem rolagem interna

- Em viewport local, o modal abriu corretamente ao clicar no primeiro card.
- `overflow-y` computado do painel: `hidden`.
- Painel medido: aproximadamente 834px de largura por 524px de altura.
- `clientHeight`: 524px; `scrollHeight`: 538px — há uma diferença de 14px de conteúdo, indicando que o override atual está comprimindo o painel e pode cortar o final em determinadas alturas.
- O próximo ajuste deve eliminar a altura rígida do painel em telas maiores e controlar a composição com `height: auto`/limite de viewport, além de reduzir a altura mínima da grade e dos controles em breakpoints menores.
- Visualmente, a imagem, descrição, tecnologias e ações aparecem no modal aberto, mas a diferença de scroll precisa ser zerada para garantir o requisito de não rolar nem cortar conteúdo.

## Validação complementar

No viewport de teste, todos os cinco templates foram abertos em sequência. O painel permaneceu com `overflow-y: hidden` e `scrollHeight === clientHeight`, sem conteúdo interno excedente. No tema claro, os três botões do Flap ficaram visíveis com texto branco e fundo teal; no tema escuro, o botão “Ver Site” ficou visível com fundo vermelho e texto branco. O título e a descrição também mantiveram contraste adequado nos dois temas.

O modal foi dimensionado como painel responsivo com altura limitada pela viewport e sem scrollbar interna. Os breakpoints reduzem tipografia, ícones, gaps e altura dos controles para manter o conteúdo na mesma composição em telas menores.
