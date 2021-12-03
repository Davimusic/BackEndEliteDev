
import mongoose from "mongoose";
const {Schema} = mongoose;

const usersSchema = new Schema({
    correo:{
        type: String,
        required: true,
    },
    identificacion:{
        type: String,
        required: true,
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
        required: true,
    },
    estado:{
        type: String,
        required: true,
    }


});

const Users = new mongoose.model('usuarios', usersSchema);

export default Users;

