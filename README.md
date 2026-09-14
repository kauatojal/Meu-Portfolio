# Kauã Tojal — Portfólio React

Aplicação React + Vite para o portfólio profissional de Kauã Tojal. A migração preserva a identidade vinho/vermelho, os assets existentes, os projetos reais, a moeda 3D, os temas, os idiomas e os links profissionais.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O Vite usa a base `/Meu-Portfolio/` para manter compatibilidade com o GitHub Pages.

## Build e preview de produção

```bash
npm run build
npm run preview
```

O build é gerado em `dist/` e inclui os assets preservados em `public/assets`.

## Estrutura

- `src/App.jsx`: composição principal, tema, idioma, orbit com scroll e modal.
- `src/components/Sections.jsx`: navegação, hero, moeda, código, redes sociais, processo, projetos, modal, skills e contato.
- `src/data/portfolio.js`: dados reais de perfil, projetos, tecnologias, skills e traduções.
- `src/styles.css`: identidade visual, temas, responsividade e animações leves.
- `src/social-update.css`: camada incremental para logo, contatos, cards sociais e hover do processo.
- `vite.config.js`: base e configuração do Vite para GitHub Pages.
- `public/assets/`: cópia dos assets existentes, sem substituição por imagens inventadas.

## Formulário e contatos

O formulário possui validação de nome, e-mail, assunto e mensagem, estados de carregamento, erro e sucesso visual, além de suporte aos temas e ao mobile. Como este repositório não possui um backend ou endpoint de e-mail configurado, o estado de sucesso informa explicitamente que a validação foi concluída; nenhuma mensagem é fingida como enviada. Os botões de e-mail e WhatsApp oferecem alternativas reais de contato usando as informações já presentes no projeto.

Para envio automatizado pelo formulário, configure um endpoint HTTPS no backend ou em um serviço de formulários e conecte-o em `src/components/Sections.jsx`, sem expor chaves secretas no frontend.

## Publicação

A publicação deve ser feita somente após validar o build e o preview. Para GitHub Pages, o diretório de saída é `dist/` e a base configurada é `/Meu-Portfolio/`.

A migração foi preparada de forma reversível. O site estático anterior permanece recuperável pelo histórico Git e pela branch local `backup/pre-react-migration`.

## Site atual

[Portfólio publicado](https://kauatojal.github.io/Meu-Portfolio/)
