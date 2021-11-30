// Traemos las dependencias necesarias
const express = require("express")
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

// Instanciamos Express, necesario en toda aplicación Express
const app = express()

// Declaramos el endpoint y como segundo parámetro el esquema y resolver de graphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)
// Este es el uri para la conexion a MongoDB se trae desde Mongo Atlas
// Usamos process.env para obtener los valores desde Nodemon
// mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ayw8p.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority
 //  mongodb+srv://davis:davis@cluster0.hujqu.mongodb.net/test
const uri = `mongodb+srv://elitedev:elitedev1234@elitedevmisiontic.54apq.mongodb.net/DBPROYECTO`
// Declaramos las opciones para mongoose
const options = { useNewUrlParser: true, useUnifiedTopology: true }

// Usamos mongose para conectarnos al uri con las opciones y entonces escucharlas en el puerto 3000 usando app
mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("Server is running")))
  .catch(error => {
    throw error
  })