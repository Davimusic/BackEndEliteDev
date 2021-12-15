import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http'
import dotenv from 'dotenv'

//middlewares
//import validateAccess from './middlewares/access.middlewares.js'

import validateAuthentication from './middlewares/authentication.middlewares.js'

//utilities
import connect from './database.js';




//typeDefs
import typeDefs from './schema/index.js'



//resolvers
import resolvers from './resolvers/index.js'
import { validate } from 'graphql';




//inicialiazr las variables de entorno
dotenv.config();

//conectar a la base de datos
connect();

const startApolloServer = async (typeDefs, resolvers) => { //funcion asincrona con 2 parametros typeDefs que en este caso es el schema y resolver
    const app = express(); //creamos una app con express
    const httpServer= http.createServer(app);  //creamos un servidor para pasarlo al plugin PluginDrainHttpServer
    const server = new ApolloServer({
        typeDefs,  //el typeDefs puede ser un string (objeto), un documentnode o un array de documentnode
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: async ({ req }) => await validateAuthentication(req), // le pasamos el resultado de una funcion,como parametro recivimos el request donde estan los header, tambien biene como parametro del response
    });

    await server.start(); // para esperar que el servidor express inicie para poder aplicar el Middleware de la aplicación
    server.applyMiddleware({ app }); 
    await new Promise(resolve => httpServer.listen({port: process.env.PORT }, resolve));
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);


};
startApolloServer(typeDefs,resolvers);


