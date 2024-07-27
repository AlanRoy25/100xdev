//Middleware for handling auth

const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("../config")


function userMiddleware(req,res,next){
  //Implement user auth logic
  // You need to check the headers and validate the admin from the admin db. Check the readme for the exact headers to be expected.

  const token = req.headers.authorization;
  //bearer asdasdasd => ["bearer", "assdads"]
  const words = token.split(" ") // the space means that convert this into an array
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET)

  if(decodedValue.username){
    req.username = decodedValue.username;
    next()
  } else{
    res.status(403).json({
      msg: "You are not authenticated"
    })
  }
} 

module.exports = userMiddleware