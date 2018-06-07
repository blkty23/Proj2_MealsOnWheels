const mongoose = require('mongoose')
const Homework = require('../models/Homework')
const Comment = require('../models/Comment')

// Connect to Database
mongoose.connect('mongodb://localhost/Proj2_MealsOnWheels')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// Remove old Homework Data
Homework.remove()
  .then(() => {
    const comment1 = new Comment({
      body: 'hello',
      submittedBy: 'coffee',
      score: 3
    })

    const comment2 = new Comment({
      body: 'bywe',
      submittedBy: 'fdsafsf',
      score: 3
    })

    // create new test Homework data
    const homework1 = new Homework({
      title: 'Pirates Read/Create',
      description: 'pirates',
      subject: 'express',
      createdBy: 'bob',
      comments: [ comment1, comment2 ]
    })
    const homework2 = new Homework({
      title: 'Pirates update/dleete',
      description: 'more pirates',
      subject: 'express',
      createdBy: 'joof',
      comments: [ comment1, comment2 ]
    })
    const homework3 = new Homework({
      title: 'Pizza Express',
      description: 'PIZZA',
      subject: 'React',
      createdBy: 'sal',
      comments: [ comment1, comment2 ]
    })
    const homework4 = new Homework({
      title: 'final project',
      description: 'everything',
      subject: 'rails',
      createdBy: 'bryan',
      comments: [ comment1, comment2 ]
    })

    const homeworks = [ homework1, homework2, homework3, homework4 ]

    // save test data
    return Homework.insertMany(homeworks)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })