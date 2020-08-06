# Proffy App

Este é um projeto que visa conectar professores e estudantes.

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ricardorinco/proffy/develop?label=LAST%20COMMIT%20%28DEVELOP%29&style=for-the-badge)

## :rocket: Tecnologias

Projeto desenvolvido com as seguintes tecnologias:

- [Angular](https://angular.io/)
- [Express](https://expressjs.com/pt-br/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :computer: Desenvolvimento

Projeto desenvolvido com base no conteúdo da <b>Next Level Week 2</b>

## :construction_worker: Como rodar

``` bash
 # Clonar repositório
 $ git clone https://github.com/ricardorinco/proffy.git
```

### 📦 Rodando o Server (API)

``` bash
 # Navegue até a pasta
 $ cd proffy/server

 # Instale as dependências
 $ npm install

 # Rodando o migrations
 $ npm run knex:migrate

 # Rodando a aplicação
 $ npm run start
```

> Endpoint de acesso da API: http://localhost:3777/

### ⚙️ Resources

 Foi criado uma coleção do para utilizar junto ao <b>Postman</b>, está coleção contém todos os endpoints com seus respectivos objetos de response e request.

``` bash
 # Navegue até a pasta
 $ cd proffy/server/resources/postman

 # Arquivo Postman
 $ Proffy.postman_collection.json
```

### 💻 Rodando a aplicação Web

``` bash
 # Navegue até a pasta
 $ cd proffy/web

 # Instale as dependências
 $ npm install

 # Rodando a aplicação
 $ ng server
```

> Endereço de acesso da aplicação web: http://localhost:4200/

### 📱 Rodando a aplicação Mobile

``` bash
 # Navegue até a pasta
 $ cd proffy/mobile

 # Instale as dependências
 $ npm install

 # Rodando a aplicação
 $ npm start
```

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
