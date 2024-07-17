// This is an hospital backend using express

/*Request Methods: 
GET - Going for the consultation to get a check up. (basically typing something in the route url that we want to find the output.)
POST- Going to get a new kidney inserted (Basically if we post something in insta or facebook)
PUT - Going to get a kidney replaced. (Basically to update something like ur username / password.)
DELETE - Going to get a kidney removed. (Delete any data from the backend.)


STATUS CODE:
200 - Everything is ok
404 - error / page not found.
500 - if an expectational error is thrown it will show as 500 document error.
411 - Inputs entered were incorrect.( Instead of nos if we throw an alphas then it will thrown an error.)

GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney
*/

const express = require ("express");
const app = express();

const users = [{ // this is array of objects: Obj[], array{}
  patientname: "Helen",
  kidneys: [{
    healthy: false
  }]
}]
app.use(express.json())

app.get("/", function(req,res){
  const HelenKidneys = users[0].kidneys;
  const numberofKidneys = HelenKidneys.length;
  let numberofHealthyKidneys = 0;
  for( let i=0; i<HelenKidneys.length; i++){
    if(HelenKidneys[i].healthy){
      numberofHealthyKidneys= numberofHealthyKidneys+1; // it will iterate over all the kidneys and if it finds then it will increment the nos of healthy kidneys
    }
  }
  const numberUnhealthykidneys = numberofKidneys - numberofHealthyKidneys;
  res.json({
    numberofKidneys,
    numberofHealthyKidneys,
    numberUnhealthykidneys
  })
})

//middlewares  to be pass the Json body on the server
app.post("/", function(req,res){
  const  isHealthy = req.body.isHealthy; // everytime we want to use post req its necessary to put req  in body // this is giving the output as undefined if middleware not used.
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "done!"
  })
})

app.put("/", function(req,res){
   for(let i=0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true
   }
   res.json({})
})

//removing all the unhealthy kidneys.
app.delete("/", function(req,res){
  if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys = [];
    for (let i=0; i< users[0].kidneys.length; i++){
      if (users[0].kidneys[i].healthy){
        newKidneys.push({
          healthy: true
        })
      } // if this kidney is healthy then uh can remove the unhealthy one
  
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "done!"
    })
  } else {
    res.sendStatus(411).json({
      msg: "You have no unhealthy kidneys."
    })
  }
 
})

//chcek if there is atleastone Unhealthy kidney if not then dont delete it.

function isThereAtleastOneUnhealthyKidney(){
  let atleastOneUnhealthyKidney = false;
  for( let i=0; i< users[0].kidneys.length; i++){
    if (!users[0].kidneys[i].healthy){
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney
}

app.listen(3000)