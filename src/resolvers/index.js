// qui utilizamo el express operator para clonar lo objetos que bienen del resolver
import projectResolver from "./project.resolver.js";
import userResolver from "./users.resolver.js";
import advanceResolver from "./advances.resolver.js";

//const { Query: projectQueries, Mutation: ProjectMutatios, ...ProjectRest} = projectResolver;
const { projectQueries, projectMutations, ...ProjectRest} = projectResolver; // se puede llamar asi si en el resolver se llaman igual
const { userQueries, userMutations, ...UserRest} = userResolver;
const { advanceQueries, advanceMutations, ...AdvanceRest} = advanceResolver;


export default{
    Query:{
        ...projectQueries,
        ...userQueries,
        ...advanceQueries,
    },
    Mutation:{
        ...projectMutations,
        ...userMutations,
        ...advanceMutations,
    },
    ...ProjectRest,
    ...UserRest,
    ...AdvanceRest
};
//00:44
