import projectResolver from "./project.resolver.js";

//const { Query: projectQueries, Mutation: ProjectMutatios, ...ProjectRest} = projectResolver;
const { projectQueries, projectMutations, ...ProjectRest} = projectResolver; // se puede llamar asi si en el resolver se llaman igual
export default{
    Query:{
        ...projectQueries
    },
    Mutation:{
        ...projectMutations
    },
    ...ProjectRest
};
//00:44