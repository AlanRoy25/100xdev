const express = require('express'); //can be written as const express = require('express')
const { Admin, Course, User } = require('../db/database')
const adminMiddleware = require('../middleware/admin');
const {JWT_SECRET} = require('../config');
const router = express.Router()
const jwt = require('jsonwebtoken')

console.log("JWT_SECRET", JWT_SECRET);
//admin routes

router.post('/signup', async (req, res) => {

  //implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  //check if this username already exists

  await Admin.create({
    username: username,
    password: password
  })
  res.json({ msg: "Admin created succesfully" })
});

router.post('/signin', async (req, res) => {
  //implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({ // This line queries the User collection in the database to find a document that matches both the provided username and password
    username,
    password
  });
  if (user) {
    const token = jwt.sign({ // used to If the user is valid, a JWT token is generated. The token payload contains the username. JWT_SECRET is a secret key used to sign the token, ensuring its integrity and authenticity.
      username
    }, JWT_SECRET)

    res.json({
      token //This sends the generated JWT token back to the client in the response.
    })
  } else {
    res.status(411).json({
      message: "Incorrect credentials"
    })
  }

})



router.post('/courses', adminMiddleware, async (req, res) => { //protected by adminmiddle b 
  // implement course logic 

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
  
  const newCourse =  await Course.create({
      title,    //or this title:title both way we can create
      description,
      imageLink,
      price
  
    })
  
    console.log(newCourse);
    res.json({
      message: "Course created successfully", courseId: newCourse._id
    })
    });
  



router.get('/courses', adminMiddleware, async (req, res) => {
  //implement for all courses 

  const response = await Course.find({});

  res.json({
    courses: response
  })

});



module.exports = router;
