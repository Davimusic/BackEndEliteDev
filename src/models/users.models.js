
import mongoose from "mongoose";
const {Schema} = mongoose;

const usersSchema = new Schema({
    correo:{
        type: String,
        unique: true,
    },
    identificacion:{
        type: String,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    contrasena:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        enum: ['Estudiante','Lider','Administrador']
    },
    estado:{
        type: String,
        enum: ['Pendiente','Autorizado','No_autorizado']
    }


});

const Users = new mongoose.model('usuarios', usersSchema);

export default Users;

