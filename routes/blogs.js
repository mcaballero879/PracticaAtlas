const express = require("express")
const router = express.Router()
// importando esquema de usuario
const postEsquema = require("../models/blogs-esquema.js")


// Listar usuarios
router.get ("/blogs",(req, res)=>{ // metodo get obtiene
    postEsquema // no hace falta pasarle parametros
    .find() // busca en base de datos
    .then(data => res.json(data))
    .catch((error) => res.json({message: error}))
} )


module.exports = router