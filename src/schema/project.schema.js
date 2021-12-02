import { gql } from 'apollo-server';

const projectType = gql `
#Project - proyectos
    type Project {
        _id: ID!,
        nom_proyecto: String!
        obj_gen: String!
        obj_esp: String!
        presupuesto: Float!
        fecha_inicio: String!
        fecha_fin: String!
        doc_lider: ID!
        estado: ProjectStatus!
        fase: Phase!
        lider: User!
    }
`

const enums = gql`
   #Enum for status values - estado
   enum ProjectStatus{
       Activo
       Inactivo
   }
   enum Phase{
       iniciado
       en desarrollo
       terminado

   }
`;

const queries = gql `
  #Query todos los proyectos
  type Query {
    allProjects: [Project]
  }
  
  type Query {
    project(_id:ID): Project
  }

`;

export default[
  projectType,
  enums,
  queries,

];
