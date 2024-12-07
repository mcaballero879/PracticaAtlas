const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRoutes = require ("./routes/users")

const app = express()
const port = process.env.PORT || 3000

// midlewares
app.use('/api',userRoutes)



// rutas 
app.get("/",(req, res) =>{
    res.send("wellcome API")
})

// mongodb conection

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Conectado a Atlas")})
.catch((error)=>{console.error("Conectado a Atlas")})




app.listen("3000",()=>{console.log("server escuchando en puerto",port)})
