// qui utilizamo el express operator para clonar lo objetos que bienen del resolver
import projectResolver from "./project.resolver.js";
import userResolver from "./users.resolver.js";

//const { Query: projectQueries, Mutation: ProjectMutatios, ...ProjectRest} = projectResolver;
const { projectQueries, projectMutations, ...ProjectRest} = projectResolver; // se puede llamar asi si en el resolver se llaman igual
const { userQueries, userMutations, ...UserRest} = userResolver;

export default{
    Query:{
        ...projectQueries,
        ...userQueries
    },
    Mutation:{
        ...projectMutations,
        ...userMutations
    },
    ...ProjectRest,
    ...UserRest
};
//00:44
