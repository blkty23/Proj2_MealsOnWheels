const express = require('express')
const router = express.Router()
const Cook = require('../models/Cook')

/* GET Cook listing. */
// localhost/cook
router.get('/', (req, res, next) => {

  // Find all Cooks
  Cook
    .find()
    .then((listOfCooks) => {

      // Once you have all cooks, then render out index page cooks is all
      // pieces of data that match the Cook Model
      res.render('Cooks/index', { listOfCooks: listOfCooks })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('Cooks/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newCook = req.body
  Cook
    .create(newCook)
    .then(() => {
      res.redirect('/cooks')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Cook
    .findById(req.params.id)
    .then((showCook) => {
      res.render('Cooks/show', { showCook })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Cook
    .findById(req.params.id)
    .then((Company) => {
      res.render('Cooks/edit', { showCook: Company })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Cook.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/cooks/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Cook.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/cooks')
    })
})

module.exports = router