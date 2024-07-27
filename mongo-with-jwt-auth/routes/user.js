// in this we will add all the users routes which will directly connect to the frontend and the backend

const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db/database');
 
//user routes

router.post('/signup', (req,res)=>{
  //implent user signup logic
  const username = req.body.username;
  const password = req.body.password;

  
  User.create({
    username,
    password
  })
  res.json({message: "User created Successfully"})

})

router.get('/courses', async (req,res)=>{

  //implement listing all courses logic
  const response = await Course.find({})

  res.json({
    courses : response})
})



router.post('/courses/:courseId', userMiddleware, async (req,res) => { // or else we could have on the body and pass the course id 
  //implement course purchasee logic

  const username = req.username;
  console.log(username);
  
})

router.get('/purchasedCourses', userMiddleware, async (req,res)=> {
  // implement fetching purchased coursesa loguc

 const user = await User.findOne({
    username: req.headers.username
  })
  console.log(user.purchasedCourses)
  const courses = await Course.find({
    _id:{
      "$in":  user.purchasedCourses 
    }
  });
  res.json({courses: courses})
})

module.exports = router