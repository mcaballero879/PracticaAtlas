const express = require("express")
const router = express.Router()
// importando esquema de usuario
const userSquema = require("../models/user-esquema.js")
const userEsquema = require("../models/user-esquema.js")

// create user
router.post ("/users",(req, res)=>{
    const user = userEsquema(req.body) 
    user
    .save() // guarda en base de datos
    .then(data => res.json(data))
    .catch((error) => res.json({message: error}))
} )



module.exports = router