<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">:trophy: Desafio #3 - Conceitos do ReactJS</h1>

O objetivo deste projeto é concluir o Desafio #3 do Bootcamp GoStack 12 da Rocketseat!
[Desafio #3](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-reactjs)

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Lucas-Dalamarta/challenge-3-gostack">
    <img alt="Stars" src="https://img.shields.io/github/stars/Lucas-Dalamarta/challenge-3-gostack">
  </a>
</p>

<p align="center">
  <a href="#dart-desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#open_file_folder-libs">Libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-pre-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#floppy_disk-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#straight_ruler-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#suspect-back-end">Back-end</a>
</p>

## :dart: Desafio:

Esse desafio consiste em criar um front-end com o React integrado a uma API localhost, capaz de criar e excluir entradas no back-end, além de ser necessário existirem as funcionalidades:

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os repositórios que estão cadastrados na sua API.

- **`Adicionar um repositório a sua API`**: Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, deve ser capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da sua API`**: Para cada item da sua lista, deve possuir um botão com o texto **Remover** que, ao clicar, irá chamar uma função para remover esse item da lista do seu frontend e da sua API.

## :open_file_folder: Libs :

- ReactJS;
- Axios;

## :wrench: Recursos:

- ReactJS;
- useEffect() e useState();
- Funções Assíncronas
- Integração com uma API externa;
- Map();

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

- **`should be able to add new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma `LI`.

- **`should be able to remove repository`**: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da `LI` do repositório adicionado, o item seja removido da listagem.

### Para rodar os testes, será necessário executar o comando:

```bash
$ yarn test
```

<blockquote align="center">Os testes foram criados pela equipe rocketseat!</blockquote>

## :computer: Front-end:

Para iniciar a aplicação no [localhost](http://localhost:3000), será necessário executar o comando:

```bash
$ yarn start
```

## :suspect: Back-end:

Caso queira rodar a aplicação em seu navegador, será necessário rodar o back-end, localizado em: [back-end](https://github.com/Lucas-Dalamarta/challenge-2-gostack)
