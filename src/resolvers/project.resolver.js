// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Projects from "../models/projects.models.js";

const allProjects = async (parent, args, context, info) => {
  const project= await Projects.find();
  return project;  
};

const project = async (parent, args, context, info) => {
 const project = await Projects.findById(args._id);
 return project;

};
//00:41

const addProject = async (parent, args, context, info) =>{
    let project = new Projects(args.input); //instancia del modelo de project
    project = await Projects.save();
    return project;

}


//objeto
export default {
  projectQueries:{
    allProjects,
    project,
  }

  
};
/*
export default {
    Query:{
      allProjects,
      project
    },
    Proyect:{
        leader, 00:47
    }
    Mutation:{
      addProject,
    }
};*/