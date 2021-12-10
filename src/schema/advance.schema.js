import { gql } from 'apollo-server';
//EL SCHEMA ES LA INTERFAZ ENTRE EL CLIENTE Y EL SERVIDOR
const advanceType = gql `
#Advances - Gestion_avances
    type Advance {
     
        _id: ID
        id_proyecto: String!
        fecha_avance: String!
        descripcion: String!
        observaciones: String!
        project: Project
              
    }
` ; //type Advance es un objeto compuesto los nombre de los campos deben concidir con los de la base de datoa para que no de error



const queries = gql `
  #Query todos los usuarios
  type Query {
    allAdvances: [Advance]
  }
  type Query{
    project(id_proyecto:ID): Project
  }
  
  type Query {
    advanceByid(_id:ID): Advance
  }
     
`;

// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS SE DEBE LLAMAR EN LOS RESOLVERS

const mutations = gql`
   type Mutation {
    addAdvance(input: addAdvanceInput!): Advance
       
   }

`;

const inputs = gql `
  input addAdvanceInput {
            id_proyecto: ID
            fecha_avance: String!
            descripcion: String!
            observaciones: String!
       }
`;


export default[
  advanceType,
  queries,
  mutations,
  inputs,

];

