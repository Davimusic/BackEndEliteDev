import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http'
import dotenv from 'dotenv'

const typeDefs = gql`
 
  type Book {
    title: String
    author: String
  }

  
  type Query {
    books: [Book]
  }
`;


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };



dotenv.config();

const startApolloServer = async (typeDefs, resolvers) => { //typeDefs que en este caso es el schema y resolver
    const app = express(); //creamos una app con express
    const httpServer= http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start(); // para esperar que el servidor express inicie para poder aplicar el Middleware de la aplicación
    server.applyMiddleware({ app }); 
    await new Promise(resolve => httpServer.listen({port: process.env.PORT }, resolve));
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);


};
startApolloServer(typeDefs,resolvers);


