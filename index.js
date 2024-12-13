const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes = require ("./routes/users.js") // puede ser cualquier nombre que indique usuarios
const postRoutes = require ("./routes/posts.js") // puede ser cualquier nombre que indique los posts


const app = express()
const port = process.env.PORT || 3000

// midlewares
app.use(express.json())
app.use('/cat',userRoutes)
app.use('/cat',postRoutes)


// rutas 
app.get("/",(req, res) =>{
    res.send("wellcome API")
})


app.get("/articles",(req, res) =>{ // ruta agregada para probar articulos
    res.send("wellcome API")
})


app.use("/",(req, res) =>{ // app.use permite recibir cualquier metodo esta ruta debe estar abajo de las demás
    res.status(404).send("No se puede encontrar la ruta")
})

// mongodb conection

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Conectado a Atlas")})
.catch((error)=>{console.error("Conectado a Atlas")})

app.listen("3000",()=>{console.log("server escuchando en puerto",port)})
