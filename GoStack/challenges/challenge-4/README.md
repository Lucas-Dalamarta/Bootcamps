<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h1 align="center">:trophy: Desafio #4 - Conceitos do React-Native</h1>

O objetivo deste projeto é concluir o Desafio #4 do Bootcamp GoStack 12 da Rocketseat!
[Desafio #3](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-reactjs)

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Lucas-Dalamarta/challenge-4-gostack">
    <img alt="Stars" src="https://img.shields.io/github/stars/Lucas-Dalamarta/challenge-4-gostack">
  </a>
</p>

<p align="center">
  <a href="#dart-desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#open_file_folder-libs">Libs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-pre-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#floppy_disk-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#straight_ruler-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#suspect-back-end">Back-end</a>
</p>

## :dart: Desafio:

Esse desafio consiste em criar um app com o React-Native integrado a uma API criada no [desafio #2](https://github.com/Lucas-Dalamarta/challenge-2-gostack) , capaz de listar entradas no back-end, além de ser necessário existem as funcionalidades:

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista de todos os repositórios que estão cadastrados na sua API com os campos **title**, **techs** e número de curtidas seguindo o padrão `${repository.likes} curtidas`, apenas alterando o número para ser dinâmico.

- **`Curtir um repositório listado da API`**: Deve ser capaz de curtir um item na sua API através de um botão com o texto **Curtir** e deve atualizar o número de likes na listagem no mobile.

Para esse desafio existem os seguintes testes:

- **`should add a like to the like counter of the repository`**: Para que esse teste passe, sua aplicação deve permitir ao clicar no botão `Curtir`, um like seja adicionado ao repositório listado, e que essa atualização possa ser visualizada na tela.

## :open_file_folder: Libs :

- ReactJS;
- Axios;

## :wrench: Recursos:

- React e React-Native;
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

- **`should add a like to the like counter of the repository`**: Para que esse teste passe, sua aplicação deve permitir ao clicar no botão `Curtir`, um like seja adicionado ao repositório listado, e que essa atualização possa ser visualizada na tela.

### Para rodar os testes, será necessário executar o comando:

```bash
$ yarn test
```

<blockquote align="center">Os testes foram criados pela equipe rocketseat!</blockquote>

## :iphone: React-Native:

Para rodar a aplicação, será necessário ter um ambiente de testes, para isso recomendo o [artigo](https://react-native.rocketseat.dev/)

## :suspect: Back-end:

Caso queira rodar a aplicação em seu smartphone, será necessário rodar o back-end, localizado em: [back-end](https://github.com/Lucas-Dalamarta/challenge-2-gostack)
