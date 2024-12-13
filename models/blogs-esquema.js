const mongoose = require("mongoose")
const blogSquema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,

    },
    excerpt: {
        type: String
    }


})

module.exports = mongoose.model("BlogsProyecto_CUDI_Colecction",blogSquema)