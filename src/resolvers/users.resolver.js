// COMO SE LLAMEN LOS QUERY Y LOS MUTATIOS EN EL SCHEMA SE DEBE LLAMAR EN LOS RESOLVERS
import Users from "../models/users.models.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { USER_STATUS } from "../constans/user.constants.js";



const allUsers = async (parent, args, context, info) => { // funcion allUsers se llama igual que en schema
    const users= await Users.find();
    return users;  
  };
  

const user = async (parent, args, context, info) => { // funcion userr se llama igual que en schema, siempre 4 argumentos, el parent es el padre del query que se esta haciendo, arg argumentos o parametros como id, context funciones de validacion, info
    const userbyid = await Users.findById(args._id); //devuelve el usuario por id
    return userbyid;
   
   };



//00:41
const userByCorreo = async (parent, args, context, info) => {
  const userbycorreo = await Users.findOne({correo : args.correo});  // se utiliza find si va a devolver varios registros, find devuelve un arreglo
  return userbycorreo;
}


// esta funcion realizara el registro de usuario en el ejemplo tambien se puede llamar register
/*const addUser = async (parent, args, context, info) =>{  // funcion addProject llama igual que en schema
    let newuser = new Users(args.input); //instancia del modelo de project
    newuser = await newuser.save();
    return  newuser;

}*/

const register = async (parent, args, context) => {
  // nueva instancia de Users y le pasamos el objeto
   const user = new Users ({  
       ...args.input,
       estado: USER_STATUS.Pendiente,
       contrasena: await bcrypt.hash(args.input.contrasena, 12), //entre mas alto el numero mas dificil de desincriptar pero se demora mas para encripta el password. Input por que en el resolver esta como input

   });
   return user.save();

}

const login = async (parent,args) => {
   const user = await await Users.findOne({correo : args.correo}); //consultamos por correo que debe ser unico
   if (!user){
     throw new error('User not found');

   }

   const {contrasena, _id} = user; //la informacion del usuario trae la contraseña
   const isValid = await bcrypt.compare(args.contrasena, contrasena); // compara el password del mutation contra el password de la base de datos
   if (!isValid){
     throw new Error('Wrong password');
   }
 //con la siguiente funcion generamos el token, recibe tres parametros, el primero los datos del usuario, el segundo un string para encriptar, el tercer parametro las opciones
   const token = await jwt.sign( 
      { userId: _id},
      process.env.SECRET,
      {expiresIn: "30m"}
   );

   return token; //lo retorna al usuario
};




//objeto
export default {  //exportamos el objeto allProjects es una propiedad cuyo valor es una funcion llamada allProjects que es lo mismo que allUsers : value el values seria la constante que tiene una funcion
  userQueries:{
    allUsers,
    user,
    userByCorreo
  },
  userMutations:{
    register,
    login,
  }

  
};