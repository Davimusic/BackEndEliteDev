import mongoose from "mongoose";
const {Schema} = mongoose;

const inscriptionSchema = new Schema({
    id_proyecto:{
        type: Schema.ObjectId,
       
    },
    id_estudiante:{
        type: Schema.ObjectId,
     },
    estado: {
        type: String,
      },
    fecha_ingreso: {
        type: String,
       
    },
    fecha_egreso: {
        type: String,
        
    },



});

const Inscriptions = new mongoose.model('inscripciones', inscriptionSchema);

export default Inscriptions;

