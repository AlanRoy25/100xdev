// Learning Mongoose database


const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@backenddb.93bwxbb.mongodb.net/user_app?retryWrites=true&w=majority&appName=BackendDB")

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String
})

app.post("/signup", async (req,res) =>{
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email: username});
  
  if(existingUser){
    return res.status(400).send("msg: user already exists")
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    "msg": " User created successfully"
  })
  
})



app.listen(3000, () => {
  console.log("Server running successfully on Port 3000");
})