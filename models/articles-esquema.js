// exporta modelo de datos de los articulos

const mongoose = require("mongoose")
const articleSquema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: 0
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: false,
        default: true
    },
    featured_image: {
        type: String,
        require: false,
        default: "imgDefault"
    }


})

module.exports = mongoose.model("article",articleSquema)