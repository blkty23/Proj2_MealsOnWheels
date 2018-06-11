const express = require('express')
const router = express.Router()
const mealSchema = require('./mealSchema')


/* GET Cook listing. */
// localhost/homework
router.get('/', (req, res, next) => {

  // Find all Meals
  Meal
    .find()
    .then((listOfMeals) => {

      // Once you have all homework, then render out index page homeworks is all
      // pieces of data that match the Homework Model
      res.render('meals/index', { listOfMeals: listOfMeals })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('meals/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newMeal = req.body
  Homework
    .create(newMeal)
    .then(() => {
      res.redirect('/meals')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Homework
    .findById(req.params.id)
    .then((homeworkAssignment) => {
      res.render('meal/show', { homeworkAssignment })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Homework
    .findById(req.params.id)
    .then((banana) => {
      res.render('meal/edit', { ShowMeal: banana })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Homework.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/meal/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Homework.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/')
    })
})

module.exports = router