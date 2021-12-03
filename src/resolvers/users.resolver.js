// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Users from "../models/users.models.js";


const allUsers = async (parent, args, context, info) => { // funcion allUsers se llama igual que en schema
    const users= await Users.find();
    return users;  
  };
  

const user = async (parent, args, context, info) => { // funcion userr se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
    const user = await Users.findById(args._id); //devuelve el usuario por id
    return user;
   
   };


//00:41
const userByCorreo = async (parent, args, context, info) => {
  const userbycorreo = await Users.findOne({correo : args.correo});  // se utiliza find si va a devolver varios registros, find devuelve un arreglo
  return userbycorreo;
}



const addUser = async (parent, args, context, info) =>{  // funcion addProject llama igual que en schema
    let newuser = new Users(args.input); //instancia del modelo de project
    newproject = await newproject.save();
    return newproject;

}


//objeto
export default {  //exportamos el objeto allProjects es una propiedad cuyo valor es una funcion llamada allProjects que es lo mismo que allUsers : value el values seria la constante que tiene una funcion
  userQueries:{
    allUsers,
    user,
    userByCorreo
  },
  userMutations:{
    addUser,
  }

  
};