const express  = require('express'); //can be written as const express = require('express')
const {Admin, Course} = require('../db/database')
const adminMiddleware = require('../middleware/admin')
const router = express.Router()

//admin routes

router.post('/signup', async (req,res) => {
  
  //implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  //check if this username already exists

  await Admin.create({
    username: username,
    password: password
  })
  res.json({msg:  "Admin created succesfully"})
});

router.post('/courses', adminMiddleware,async (req,res)=>{ //protected by adminmiddle b 
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


router.get('/courses', adminMiddleware, async (req,res) => {
  //implement for all courses 

  const response = await Course.find({});
   // can be done using Course.find({}).then(function(response){ res.json({courses: response});
    res.json({
      courses: response
    })
  });
 
  

module.exports = router;
