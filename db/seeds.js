const mongoose = require('mongoose')
const Cook = require('../models/Cook')
const Customer = require('../models/Customer')
const Meal = require('../models/Meal')




// Connect to Database
mongoose.connect('mongodb://localhost/Proj2_MealsOnWheels')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// create new test Customer data
const customer = new Customer({
   name: "John",
   email: "john.doe@gmail.com",
   DOB: 10011988,
   zip: 30314,
   phone: 7708990359
   })

// create new test Meal data
// const meal = new Meal({
//   name: "Jambalya",
//   description: "Blackened chicken breast, shrimp, chicken-andouille sausage, bell peppers, white onions and tomatoes in a spicy sauce. Served over rice pilaf.",
//   img:  "jambalya.jpg",
//   consumers: [customer1, customer2],
//   price: 14.45,
//   qty: 1
//   })

// create new test Cook data
// const cook = new Cook({
//   name: "Ty's Cajun Cuisine",
//   specialty: "Cajun",
//   location: "East Atlanta",
//   restaurant_desc: "Food truck company specializing in cajun cuisine",
//   food_pricepoint: 12,
//   meals: [meal1, meal2]
//   })

// Remove old Customers Data
Customer.remove().then(() => {
  const customer1 = new Customer({
    name: "John",
    email: "john.doe@gmail.com",
    DOB: 10011988,
    zip: 30314,
    phone: 7708990359
  })

  const customer2 = new Customer({
    name: "Tony",
    email: "tony.doe@gmail.com",
    DOB: 10011988,
    zip: 30314,
    phone: 4046990359
  })

  // Remove old Meals Data
  Meal.remove().then(() => {
    const meal1 = new Meal({
      name: "Jambalya",
      description: "Blackened chicken breast, shrimp, chicken-andouille sausage, bell peppers, white onions and tomatoes in a spicy sauce. Served over rice pilaf.",
      img:  "jambalya.jpg",
      consumers: [customer1, customer2],
      price: 14.45,
      qty: 1
    })

    const meal2 = new Meal({
      name: "Jambalya",
      description: "Blackened chicken breast, shrimp, chicken-andouille sausage, bell peppers, white onions and tomatoes in a spicy sauce. Served over rice pilaf.",
      img:  "jambalya.jpg",
      consumers: [customer1, customer2],
      price: 14.45,
      qty: 1
    })

    // Remove old Cook Data
    Cook.remove().then(() => {
      const cook1 = new Cook({
        name: "Ty's Cajun Cuisine",
        specialty: "Cajun",
        location: "East Atlanta",
        restaurant_desc: "Food truck company specializing in cajun cuisine",
        food_pricepoint: 12,
        meals: [meal1, meal2]
      })

      const cook2 = new Cook({
        name: "Q-Time",
        specialty: "Soul Food",
        location: "Southwest Atlanta",
        restaurant_desc: "Cafeteria-style Southern restaurant serving ribs, catfish & ham hocks with tons of sides since 1979.",
        food_pricepoint: 9,
        meals: [meal1, meal2]
      })

    // create new test Customer data
    const customer = new Customer({
        name: "John",
        email: "john.doe@gmail.com",
        DOB: 10011988,
        zip: 30314,
        phone: 7708990359
      })

// create new test Meal data
    const meal = new Meal({
        name: "Jambalya",
        description: "Blackened chicken breast, shrimp, chicken-andouille sausage, bell peppers, white onions and tomatoes in a spicy sauce. Served over rice pilaf.",
        img:  "jambalya.jpg",
        consumers: [customer1, customer2],
        price: 14.45,
        qty: 1
      })

// create new test Cook data
    const cook = new Cook({
        name: "Ty's Cajun Cuisine",
        specialty: "Cajun",
        location: "East Atlanta",
        restaurant_desc: "Food truck company specializing in cajun cuisine",
        food_pricepoint: 12,
        meals: [meal1, meal2]
      })

      const cooks = [ cook1, cook2]
      const consumers = [ customer1, customer2]
      const meals = [meal1, meal2]

    

    // save test data
      return Customer.insertMany(consumers)
      return Meal.insertMany(meals)
      return Cook.insertMany(cooks)
    })
  })
}).then(() => {
  // close the database
  mongoose.connection.close()
})