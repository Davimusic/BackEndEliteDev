import mongoose from "mongoose";
const { Schema } = mongoose;



const projectsSchema = new Schema({
    nom_proyecto:{
        type: String,
        required: true,
    },
    obj_gen: {
        type: Object,
       // required: true,
    },

   obj_esp: { 
        type: [Object],
       // required: true,
    },
    presupuesto: {
      type: Number,
     //  required: true,
    },
    fecha_inicio: {
        type: Date, 
        required: true,
    },

    fecha_fin: {
        type: Date,
        required: true,
    },
    doc_lider:{
        type: Schema.ObjectId,
        //required: true,
    },
    estado: {
      type: String,
      enum: ['Activo', 'Inactivo'],
      required: true,
    },

    fase : {
        type: String,
    }


});

const Projects = new mongoose.model('proyectos', projectsSchema);

export default Projects;
