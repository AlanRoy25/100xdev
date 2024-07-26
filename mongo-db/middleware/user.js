//middleware for handling the user logic
const {User} = require('../db/database')
function userMiddleware(req,res,next){

  const username = req.headers.username; // this will check if any user exists with the username 
  const password = req.headers.password; 

  User.findOne({ // need to check does this username and password does exist in the db, so for that we are checking the admin db
    username: username,
    password: password
  })
  .then (function (value) {
    if(value){  // if in the routes user exists in the db then it will show in that routes and it will move to the next routes
      next();
    } else{ // else if uh dont find any user with the username or doesnt match that password , then send 403 status
      res.status(403).json({
        msg: "User doesnt exist"
      })
    }
  })
}

module.exports = userMiddleware;

