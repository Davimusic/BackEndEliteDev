// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const aricleSchema = new Schema(
  {
    id_proyecto: {
      type: String,
      required: true,
    },

    id_estudiante: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      required: true,
    },

    fecha_ingreso: {
      type: String,
      require: true
    },

    fecha_egreso: {
      type: String,
      require: true
    },    

    
  },
  { timestamps: true }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("inscripcion", aricleSchema)   