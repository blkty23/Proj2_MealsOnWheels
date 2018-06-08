const express = require('express')
const router = express.Router({ mergeParams: true })
const Homework = require('../models/Homework')
const Comment = require('../models/Comment')

/* GET listing. */

router.get('/', (req, res, next) => {

  // use homeworkID to find Homework assignment
  Homework.findById(req.params.homeworkId)
    .then((homework) => {
      const comments = homework.comments
      res.render('comment/index', {
        comments
      })
    })

  // take the comments and apply them to a 
  // hbs file
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('comment/new', {
    homeworkId: req.params.homeworkId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  // make comment req.body
  const comment = new Comment(req.body)

  // get homework assignment by the id
  Homework.findById(req.params.homeworkId)
    .then((homeworkAssignment) => {

      // push new comment to comments
      homeworkAssignment.comments.push(comment)

      // save the homework assignment
      return homeworkAssignment.save()
    })
    .then(() => {

      // redirect to comments
      res.redirect(`/homework/${req.params.homeworkId}/comment`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {

})

module.exports = router