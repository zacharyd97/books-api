const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
  })

  const booksController = require('./controller/books_controller')
  app.use('/books', booksController)


app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })