// in this database we will add all the schemas of the mongoose for the course app

const mongoose = require ('mongoose');
const express = require ('express')
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://admin:admin@backenddb.93bwxbb.mongodb.net/mongo-jwt");

//define the schemas

const AdminSchema = new mongoose.Schema({
  // schema definitation here
  username: String,
  password: String

})

const UserSchema = new mongoose.Schema({

  //userschema
  username: String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
})

const CourseSchema = new mongoose.Schema({
  
  //schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String

})


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports ={
  Admin,
  User,
  Course,
}