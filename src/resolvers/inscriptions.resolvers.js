// Comenzamos traendo el modelo de datos
const Inscripciones = require("../models/inscriptions.model.js")

// Exportamos las funciones que resolverá las peticiones
module.exports = {
  // Esta función es para los querys
  articles: async () => {
    try {
      // creamos una constante que mediante find me trae todo el arreglo de registros
      const articlesFetched = await Inscripciones.find()
      // Hacemos un map al arreglo y creamos otro arreglo pero con los datos que queremos mostrar
      return articlesFetched.map(article => {
        return {
          ...article._doc,
          _id: article.id,
          createdAt: new Date(article._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  // Esta otra función es para el mutation
  createArticle: async args => {
    try {
      // Creamos un objeto a partir de los args que son los que mandamos
      const { id_proyecto, id_estudiante, estado, fecha_ingreso, fecha_egreso } = args.article
      // Creamos el objeto article con el objeto anterior
      const article = new Inscripciones({
        id_proyecto,
        id_estudiante,
        estado,
        fecha_ingreso,
        fecha_egreso,
      })
      // Hacemos un await guardando el articulo creado con save
      const newArticle = await article.save()
      // Retornamos un objeto con el resultado del await y el id
      return { ...newArticle._doc, _id: newArticle.id }
    } catch (error) {
      throw error
    }
  },
}