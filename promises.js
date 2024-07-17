// const fs = require ("fs");
// const { resolve } = require("path");

// function AlanreadFile(){
//   return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//       resolve(data);
//     });
//   })

// }

// //callback function to call;

// function onDone(data){
//   console.log(data);
// }

// AlanreadFile().then(onDone)




////////////////////////

function AlanreadFile() {
  let p = new Promise(function (resolve){
    setTimeout(resolve, 2000) // async function using the promises and using resolve in it and .then for resolving the function
  });
  return p;
}

const value = AlanreadFile();
value.then(function(){
  console.log("Hi there")
})