import { gql } from 'apollo-server';
//EL SCHEMA ES LA INTERFAZ ENTRE EL CLIENTE Y EL SERVIDOR
const userType = gql `
#Users - usuarios
    type User {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        contraseña: String!
        rol: Rol!
        estado: Status!
       
    }
` ; //type User es un objeto compuesto los nombre de los campos deben concidir con los de la base de datoa para que no de error


const enums = gql`          
   #Enum for status values - estado
   enum Rol{
      Estudiante
      Líder
      Administrador

    }
   enum Status{
       Activo
       Inactivo
   }   
`;

const queries = gql `
  #Query todos los usuarios
  type Query {
    allUsers: [User]
  }
  
  type Query {
    user(_id:ID): User
  }
  type Query {
    userByCorreo(correo: String!): User
  }
   
`;
//en caso de que el mismo email este envarios registro la consulta devolvera un arreglo entonces quedari proyectByName(nom_proyecto: String!): [Project]
// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS SE DEBE LLAMAR EN LOS RESOLVERS
const mutations = gql`
   type Mutation {
      addUser(input: AddUserInput!): Project 
       
   }

`;

const inputs = gql `
  input AddUserInput {
        correo: String!
        identificacion: String!
        nombre: String!
        contraseña: String!
        rol: Rol!
        estado: Status!
       }
`


export default[
  projectType,
  enums,
  queries,
  mutations,
  inputs,

];

