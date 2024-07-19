const express = require ('express')

const app = express();

// This is basically for an health checkup
app.use(express.json())

 app.get("/", (req, res) =>{
  res.send("hello NodeApi")
 })


function userMiddleware(req, res, next){
  if(username != "admin" && password != "pass"){
    res.status(403).json({messgae: "incorrect inputs"});
  }
  else{
    next();
  }
};

function kidneyMiddleware(req,res,next){
  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({messgae: " incorrect inputs"})
  }
  else{
    next();
  }
}

app.post("/healthcheckup", (req,res) => {
  //kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys")

})



app.get("/healthcheckup", userMiddleware,kidneyMiddleware , (res,req) => {
  //do something with kidney here
  res.send("Your Body is healthy")
})

app.get("/kidneycheckup", userMiddleware, kidneyMiddleware, (req,res) =>{

  res.send("Your kidney is healthy")
})

app.get("/heartcheckup", userMiddleware, (req,res) =>{

  res.send("Your Heart is healthy")
})


//global catches
app.use(function(err,req,res,next){
  res.json({
    msg: "Sorry something went wrong"
  });
})


app.listen(3000)