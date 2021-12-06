// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Advances from "../models/advances.modelo.js";
import Projects from "../models/projects.models.js"; //importamos para poder tener el nombre del proyecto al que se relaciona

const allAdvances = async (parent, args, context, info) => { // funcion allAdvances se llama igual que en schema
    const advances= await Advances.find();
    return advances;  
  };
  

const advanceByid = async (parent, args, context, info) => { // funcion advanceByid se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
    const advancebyid = await Advances.findById(args._id); //devuelve el avance por id
    return advancebyid;
   
   };

   const project = async (parent, args, context, info) => { // funcion userr se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
    const proyectbyid = await Projects.findById(parent.id_proyecto); //devuelve el usuario por id ojo  con el parent
    return proyectbyid;
   
   };




const addAdvance = async (parent, args, context, info) =>{  // funcion addAdvance llama igual que en schema
    let newadvance = new Advances(args.input); //instancia del modelo de project
    newadvance = await newadvance.save();
    return  newadvance;

}


//objeto
export default {  //exportamos el objeto allAdvances es una propiedad cuyo valor es una funcion llamada allAdvances que es lo mismo que allAdvace : value el values seria la constante que tiene una funcion
  advanceQueries:{
    allAdvances,
    advanceByid,
   },
   Advance:{
    project,
   },

  advanceMutations:{
    addAdvance,
  }

  
};