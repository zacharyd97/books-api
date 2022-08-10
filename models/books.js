const mongoose = require('mongoose')
const {schema} = mongoose

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books