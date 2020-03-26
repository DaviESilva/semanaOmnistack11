const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*  
 * Rota = link inteiro
 * Recurso = O que vem depois da '/', por exemplo: /users
 */

 /**
  * Métodos HTTP:
  * GET: buscar/listar uma informação no Back-End
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: deletar uma informação no back-end
  */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?', que servem para filtros, paginação.
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpos da Requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Data Bases (DB):
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */