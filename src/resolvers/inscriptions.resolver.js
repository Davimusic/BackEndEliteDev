// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Inscriptions from "../models/inscriptions.models.js";


const allInscriptions = async (parent, args, context, info) => { // funcion allAdvances se llama igual que en schema
    const advances= await Inscriptions.find();
    return advances;  
  };
  

const inscriptionByid = async (parent, args, context, info) => { // funcion advanceByid se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
    const inscriptionbyid = await Inscriptions.findById(args._id); //devuelve el avance por id
    return inscriptionbyid;
   
   };


const addInscription = async (parent, args, context, info) =>{  // funcion addAdvance llama igual que en schema
    let newinscription = new Inscriptions(args.input); //instancia del modelo de project
    newinscription = await newinscription.save();
    return  newinscription;

}


//objeto
export default {  //exportamos el objeto allAdvances es una propiedad cuyo valor es una funcion llamada allAdvances que es lo mismo que allAdvace : value el values seria la constante que tiene una funcion
  inscriptionQueries:{
    allInscriptions,
    inscriptionByid,
   },
   inscriptionMutations:{
    addInscription,
  }

  
};