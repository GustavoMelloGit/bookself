# BookSelf 📚

**BookSelf** é uma plataforma para criar, organizar e compartilhar **tierlists de livros**. Escolha um tema, organize seus livros favoritos em tiers e compartilhe suas opiniões e recomendações com outros leitores!

## Sumário

- [BookSelf 📚](#bookself-)
  - [Sumário](#sumário)
  - [Funcionalidades](#funcionalidades)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Comandos Disponíveis](#comandos-disponíveis)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Contribuindo](#contribuindo)

---

## Funcionalidades

- Crie tierlists com livros de diferentes gêneros e temas.
- Personalize a classificação dos livros em níveis (S, A, B, etc.).
- Compartilhe suas tierlists com outros usuários e veja recomendações.
- Descubra novos livros baseados nas tierlists de outros leitores.

## Estrutura do Projeto

O projeto utiliza o framework [Qwik](https://qwik.dev/) com [QwikCity](https://qwik.dev/qwikcity/overview/) para a estruturação das rotas e layouts.

- `src/routes`: Onde ficam as rotas baseadas em diretório. Arquivos `layout.tsx` definem layouts e `index.tsx` definem as páginas.
- `src/components`: Diretório recomendado para componentes reutilizáveis.
- `public`: Armazena arquivos estáticos como imagens e ícones.

## Como Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/bookself.git
   cd bookself
   ```

2. **Instale as dependências:**:
   ```bash
   npm install
   ```
3. **Inicie o projeto:**
   ```bash
   npm start
   ```
   Isso inicia o servidor local para desenvolvimento, usando a renderização no servidor (SSR).

## Comandos Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera uma build de produção do projeto.
- `npm run preview`: Cria uma build de produção e inicia um servidor local para pré-visualização.

## Tecnologias Utilizadas

- [Qwik](https://qwik.dev/): Framework ultrarrápido para construção de sites.
- [QwikCity](https://qwik.dev/docs/qwikcity/): Extensão para Qwik que facilita a criação de sites completos com roteamento baseado em diretórios.
- [Vite](https://vite.dev/): Ferramenta de desenvolvimento para projetos modernos de front-end.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para a sua funcionalidade (git checkout -b nova-funcionalidade).
3. Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
4. Faça push para a branch (git push origin nova-funcionalidade).
5. Abra um Pull Request.
