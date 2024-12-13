const express = require("express")
const router = express.Router()
// importando esquema de usuario
const userEsquema = require("../models/user-esquema.js")

// create user
router.post ("/users",(req, res)=>{ // metodo post envia
    const user = userEsquema(req.body) 
    user
    .save() // guarda en base de datos
    .then(data => res.json(data))
    .catch((error) => res.json({message: error}))
} )

// Listar usuarios
router.get ("/users",(req, res)=>{ // metodo get obtiene
   userEsquema // no hace falta pasarle parametros
    .find() // busca en base de datos
    .then(data => res.json(data))
    .catch((error) => res.json({message: error}))
} )

// buscar un usuarios por id
router.get ("/users",(req, res)=>{ // metodo get obtiene
    const {id} = req.params // el id es el parametro que usamos para identificar
    userEsquema // no hace falta pasarle parametros
     .findById(id) // busca en base de datos
     .then(data => res.json(data))
     .catch((error) => res.json({message: error}))
 } )

 // actualizar un usuarios por id
router.put ("/users",(req, res)=>{ // metodo get obtiene
    const {id} = req.params // el id es el parametro que usamos para identificar
    const {name, age, email} = req.body // pasamos todos los parametros que se pueden actualizar
    userEsquema // no hace falta pasarle parametros
     .updateOne({_id: id},{$set: {name, age, email}} ) // con el id busca el usuario y con $set pasamos los parametros que se actualizan
     .then(data => res.json(data))
     .catch((error) => res.json({message: error}))
 } )


module.exports = router