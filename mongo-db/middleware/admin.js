//Middleware for handling js
const {Admin} = require('../db/database')

function adminMiddleware(req,res,next){
  //implement admin auth login,
  //you need to check the headers and validate the admin from the admin db
  // check the readme for the headers to be expected.

  const username = req.headers.username; // this will check if any user exists with the username 
  const password = req.headers.password; 

  Admin.findOne({ // need to check does this username and password does exist in the db, so for that we are checking the admin db
    username: username,
    password: password
  })
  .then (function (value) {
    if(value){  // if in the routes user exists in the db then it will show in that routes and it will move to the next routes
      next();
    } else{ // else if uh dont find any user with the username or doesnt match that password , then send 403 status
      res.status(403).json({
        msg: "Admin doesnt exist"
      })
    }
  })


}

module.exports = adminMiddleware;
 