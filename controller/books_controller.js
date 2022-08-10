const express = require('express')
const books = express.Router()
const Books = require('../models/books.js')


books.get('/seed', (req, res) => {
    Books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})




books.get('/', (req, res) => {
    Books.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
})

books.get('/:id', (req, res) => {
    Books.findById(req.params.id)
        .then(foundBooks => {
            res.json(foundBooks)
        })
})

books.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id , req.body)
        .then(updateBooks => {
            res.json(req.body)
        })
})

books.delete('/:id', (req,res) => {
    Books.findByIdAndDelete(req.params.id)
        .then(deletedBooks => {
            res.json({message: 'delete successful'})
    })
})

books.post('/', (req, res) => {
    Books.create(req.body)
        .then(createdBook => {
            res.json(createdBook)
        })
})


module.exports = books