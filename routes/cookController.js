const express = require('express')
const router = express.Router()
const Cook = require('../models/Cook')

/* GET homework listing. */
// localhost/homework
router.get('/', (req, res, next) => {

  // Find all Cooks
  Cook
    .find()
    .then((listOfCooks) => {

      // Once you have all homework, then render out index page homeworks is all
      // pieces of data that match the Homework Model
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
      res.redirect('/cook')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Cook
    .findById(req.params.id)
    .then((ShowCook) => {
      res.render('cook/show', { ShowCook })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Cook
    .findById(req.params.id)
    .then((Company) => {
      res.render('cook/edit', { ShowCook: Company })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Cook.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/cook/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Cook.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/cook')
    })
})

module.exports = router