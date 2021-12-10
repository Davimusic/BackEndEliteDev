// qui utilizamo el express operator para clonar lo objetos que bienen del resolver
import projectResolver from "./project.resolver.js";
import userResolver from "./users.resolver.js";
import advanceResolver from "./advances.resolver.js";
import inscriptionResolver from "./inscriptions.resolver.js";

//const { Query: projectQueries, Mutation: ProjectMutatios, ...ProjectRest} = projectResolver;
const { projectQueries, projectMutations, ...ProjectRest} = projectResolver; // se puede llamar asi si en el resolver se llaman igual
const { userQueries, userMutations, ...UserRest} = userResolver;
const { advanceQueries, advanceMutations, ...AdvanceRest} = advanceResolver;
const { inscriptionQueries, inscriptionMutations, ...InscriptionRest} = inscriptionResolver;


export default{
    Query:{
        ...projectQueries,
        ...userQueries,
        ...advanceQueries,
        ...inscriptionQueries
    },
    Mutation:{
        ...projectMutations,
        ...userMutations,
        ...advanceMutations,
        ...inscriptionMutations,
    },
    ...ProjectRest,
    ...UserRest,
    ...AdvanceRest,
    ...InscriptionRest
};
//00:44
