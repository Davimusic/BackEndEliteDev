// Nos traemos la funciónn que utilizaremos de la dependencia de graphql
const { buildSchema } = require("graphql")

// Utilizamos este método para crear nuestros esquemas de la siguiente forma
module.exports = buildSchema(`

  type Inscripciones {
    _id: ID!
    id_proyecto: String!
    id_estudiante: String!
    estado: String!
    fecha_ingreso: String!
    fecha_egreso: String!
    createdAt: String!
  }

  input ArticleInput {
    id_proyecto: String!
    id_estudiante: String!
    estado: String!
    fecha_ingreso: String!
    fecha_egreso: String!
    
  }

  type Query {
    articles:[Inscripciones!]
  }

  type Mutation {
    createArticle(article:ArticleInput): Inscripciones
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)