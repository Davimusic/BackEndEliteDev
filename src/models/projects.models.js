import mongoose from "mongoose";
const {Schema} = mongoose;

const projectsSchema = new Schema({
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
    contraseña:{
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
    },


});

const Projects = new mongoose.model('usuarios', projectsSchema);

export default Projects;

