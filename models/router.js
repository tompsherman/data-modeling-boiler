const router = require('express').Router()

const Duck = require('../models/models')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
// @desc		Get all ducks
// @route		GET /
router.get('/', (req, res) => {
    Duck.find()
    .then(ducks => res.status(202).json(ducks))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Get a duck by id
// @route		GET /:id
router.get('/:id', (req, res) => {
    Duck.findById(req.params.id)
    .then(duck => res.status(202).json(duck))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Add a new duck
// @route		POST /
router.post('/', (req, res) => {
    Duck.create(req.body)
    .then(duck => res.status(201).json(duck))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Update a duck by id
// @route		PUT /:id
router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body
    
    Duck.findById(id)
    .then(duck => {
        if(duck) {
            return Duck.update(id, changes)
        } else {
            res.status(404).json({message: "duck not found!"})
        }
    })
    .then(updatedDuck => {
        res.json(updatedDuck)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Remove a duck by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {
    Duck.remove()
    .then()
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

module.exports = router