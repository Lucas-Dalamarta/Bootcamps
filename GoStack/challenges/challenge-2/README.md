<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">:trophy: Desafio #2 - Conceitos do NodeJS</h1>

O objetivo deste projeto é concluir o Desafio #2 do Bootcamp GoStack 12 da Rocketseat!
[Desafio #2](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs)

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Lucas-Dalamarta/challenge-2-gostack">
    <img alt="Stars" src="https://img.shields.io/github/stars/Lucas-Dalamarta/challenge-2-gostack">
  </a>
</p>

<p align="center">
  <a href="#dart-desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#open_file_folder-libs">Libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-pre-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#floppy_disk-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#straight_ruler-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#suspect-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-front-end">Front-end</a>
</p>

## :dart: Desafio:

Esses desafios consistem em criar um back-end com o NodeJS capaz de criar, listar, alterar e excluir entradas por meio de rotas. Para que o desafio esteja completo, ele deverá ter as seguintes rotas:

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

## :open_file_folder: Libs :

- Cors;
- Uuidv4;

## :wrench: Recursos:

- NodeJS;
- Express;

## :books: Pre-requisitos:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## :floppy_disk: Instalação:

Após clonar o projeto, será necessário executar o comando:

```bash
$ yarn
```

## :straight_ruler: Testes:

Para esse desafio existem os seguintes testes:

- **`should be able to create a new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should be able to give a like to the repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- **`should not be able to like a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

<blockquote align="center">Os testes foram criados pela equipe rocketseat!</blockquote>

### Para rodar os testes, será necessário executar o comando:

```bash
$ yarn test
```

## :suspect: Back-end:

Para iniciar a aplicação no [localhost](http://localhost:3333), será necessário executar o comando:

```bash
$ yarn nodemon
```

## :computer: Front-end:

Caso queira rodar a aplicação em seu navegador, será necessário rodar o front-end, localizado em: [front-end](https://github.com/Lucas-Dalamarta/challenge-3-gostack)
