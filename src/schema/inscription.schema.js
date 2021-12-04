import { gql } from 'apollo-server';
//EL SCHEMA ES LA INTERFAZ ENTRE EL CLIENTE Y EL SERVIDOR
const inscriptionType = gql `
#Project - proyectos
    type Incription { 
       _id: ID
       id_proyecto: ID
       id_estudiante:ID
        estado: Phase
        fecha_ingreso: String
        fecha_egreso:String
        }
` ; //type Project es un objeto compuesto los nombre de los campos deben concidir con los de la base de datoa para que no de error

const enums = gql`          
   #Enum for status values - estado
   
   enum Phase{
       Activo
       Iniciando
       En desarrollo
       Terminado

   }
`;

const queries = gql `
  #Query todos los proyectos
  type Query {
    allInscriptions: [Incription]
  }
  
  type Query {
    inscriptionByid(_id:ID): Incription
  }
   
`;
//en caso de que el mismo email este envarios registro la consulta devolvera un arreglo entonces quedari proyectByName(nom_proyecto: String!): [Project]
// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS SE DEBE LLAMAR EN LOS RESOLVERS
const mutations = gql`
   type Mutation {
    addInscription(input: AddInscriptionInput!): Incription 
       
   }

`;

const inputs = gql `
  input AddInscriptionInput {
        id_proyecto: ID
        id_estudiante:ID
        estado: Phase
        fecha_ingreso: String
         fecha_egreso:String
      }
`


export default[
  inscriptionType,
  enums,
  queries,
  mutations,
  inputs,

];

