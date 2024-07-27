//Middleware for handling auth
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("../config")


function adminMiddleware(req,res,next){
  //Implement admin auth logic
  // You need to check the headers and validate the admin from the admin db. Check the readme for the exact headers to be expected.

  const token = req.headers.authorization;
  //bearer asdasdasd => ["bearer", "assdads"]
  const words = token.split(" ") // the space means that convert this into an array
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedValue.username){
    next()
  }
  else{
    res.status(403).json({
      msg: "You are not authenticated."
    })
  } 
    
  } catch (error) {
    res.json({
      msg: "Incorrect inputs"
    })
  }
  

    



}

module.exports = adminMiddleware