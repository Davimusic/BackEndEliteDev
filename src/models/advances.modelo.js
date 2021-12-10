import mongoose from "mongoose";
const {Schema} = mongoose;

const advancesSchema = new Schema({
    id_proyecto:{
        type: Schema.ObjectId,
       
    },
     fecha_avance: {
        type: String,
        required: true,
    },


   descripcion: {
        type: String,
        required: true,
    },
     
    
    observaciones: {
        type: String,
        required: true,
    }
});

const Advances = new mongoose.model('gestion_avances', advancesSchema);

export default Advances;

