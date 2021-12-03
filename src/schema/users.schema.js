import { gql } from 'apollo-server';
//EL SCHEMA ES LA INTERFAZ ENTRE EL CLIENTE Y EL SERVIDOR
const userType = gql `
#Users - usuarios
    type User {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        contrasena: String!
        rol: Rol!
        estado: String!
       
    }
` ; //type User es un objeto compuesto los nombre de los campos deben concidir con los de la base de datoa para que no de error


const enums = gql`          
   #Enum for status values - estado
   enum Rol{
      Estudiante
      Lider
      Administrador

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
      addUser(input: AddUserInput!): User 
       
   }

`;

const inputs = gql `
  input AddUserInput {
        correo: String!
        identificacion: String!
        nombre: String!
        contrasena: String!
        rol: Rol!
        estado: String!
       }
`;


export default[
  userType,
  enums,
  queries,
  mutations,
  inputs,

];

