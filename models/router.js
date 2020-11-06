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

})
// @desc		Get a duck by id
// @route		GET /:id
router.get('/:id', (req, res) => {

})
// @desc		Add a new duck
// @route		POST /
router.post('/', (req, res) => {

})
// @desc		Update a duck by id
// @route		PUT /:id
router.put('/:id', (req, res) => {

})
// @desc		Remove a duck by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {

})

module.exports = router