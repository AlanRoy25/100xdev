const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const AllUsers = [ //in memory database
  {
  username: "zuri@gmail.com",
  password: "2213",
  name: "Zuriel Zakky",
},
{
  username: "harman@gmail.com",
  password: "1213",
  name: "Harman Preet",
},
{
  username: "Raman@gmail.com",
  password: "1245",
  name: "Raman Singh",
},
];


function userExists(username, password){
  // write logic to return true or false if the user exists
  // in AllUsers array 

  let userExists = false; // user doesnt exist
  for(let i =0; i<AllUsers.length; i++){
    if(AllUsers[i].username == username && AllUsers[i].password == password){ //even if one of the user nd password matches then return true.
      userExists = true;
    }
  }
  return userExists;
  
}
  app.post("/signin", (req,res)=>{
    const username = req.body.username; // to check if the user exists return in the body.
    const password = req.body.password;

    if(!userExists(username,password)){
      return res.status(403).json({
        msg: " User doesnt exist in our memory db ",
      });
  
  }

  const token = jwt.sign({username: username}, jwtPassword); //jwt lib : jwt.sign
  return res.json({
    token
  });
});

app.get("/users", (req,res) => {
  const token = req.headers.authorization;
  
  let username;
  try {
    const decoded = jwt.verify(token, jwtPassword); // the token which are there in headers is verified in this  //jwt.verify is jwt lib
    username = decoded.username
    //returns a list of users other than this username
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token"
    });
  }
  res.json({
    users: AllUsers.filter(function(value){
      if(value.username == username) {
        return false;
      }
      else{
        return true;
      }
    })
  })
})

app.listen(3000)