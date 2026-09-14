# Kauã Tojal — Portfólio

Portfólio profissional estático de Kauã Tojal, desenvolvido com HTML semântico, CSS moderno e JavaScript vanilla. A página apresenta posicionamento profissional, especialidades, projetos reais e caminhos diretos de contato.

## Rodar localmente

Como o projeto usa apenas assets estáticos, basta servir a pasta por um servidor HTTP:

```bash
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Publicar no GitHub Pages

O projeto está preparado para publicação direta a partir da branch `main`, sem etapa de build. No GitHub, abra **Settings → Pages**, selecione **Deploy from a branch**, escolha `main` e a pasta `/ (root)`. O endereço publicado é:

<https://kauatojal.github.io/Meu-Portfolio/>

## Estrutura principal

```text
index.html                 # estrutura semântica e conteúdo
assets/css/style.css       # identidade visual, responsividade e acessibilidade
assets/scripts/script.js   # menu, reveal, progresso e microinterações
assets/imagens/            # imagens dos projetos e tecnologias
assets/pdf/                # currículo
assets/img/brand/          # favicon e marca
```

## Dependências

Não há dependências de build. A animação de entrada usa GSAP 3.12.5 carregado com `defer` por CDN e possui fallback para IntersectionObserver e CSS caso a biblioteca não esteja disponível.

## Decisões de performance e acessibilidade

As imagens de projetos usam `loading="lazy"`, dimensões visuais reservadas por CSS e textos alternativos descritivos. O conteúdo permanece disponível em HTML mesmo sem JavaScript. O menu possui estado `aria-expanded`, a navegação usa landmarks semânticos e há suporte a `prefers-reduced-motion`. A cena visual é feita com CSS 3D leve, sem iframe ou biblioteca 3D pesada, e é reduzida no mobile.

## Projetos apresentados

- [Flap](https://github.com/kauatojal/Residencia4-Flap) — aplicação full stack com frontend, backend e demo.
- [Inove Imobiliária](https://github.com/inove-imobiliaria) — aplicação web e site institucional.
- [IA-Project](https://github.com/kauatojal/IA-Project) — análise de dados e classificação com Python.

Links de contato e currículo permanecem baseados nos dados já existentes no portfólio.
