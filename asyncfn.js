// async fn
/*
function findSum(n){
  let ans = 0;
  for (let i=0; i<n; i++){
    ans += i;
  }
  return ans;
}

function findtillSum100(){
  console.log(findSum(100));
}

//busy waiting sync function
function syncSleep(){
  let a=1;
  for(let i=0; i< 100000000; i++)
    a++;
}

syncSleep();
findtillSum100()

//setTimeout(findtillSum100, 1000)
console.log("hello world");
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// another async example

 const fs = require("fs"); // filesystem module

// fs.readFile("a.txt", "utf-8", function(err,data){
//   console.log(data);
// })

// console.log("Hi there"); // here the thread always works first which is in log hi there and then it prints the readfile.
// let a =0;
// for (let i=0; i<10000000000; i++){ // takes very long, longer than the file read.
//   a++;
// }

// console.log("Hi there 2");
  

// Own asynchronous file:
function alanreadFile(cb){
  fs.readFile("a.txt", "utf-8", function(err, data){
    cb(data)
  });
}

//callback function to call
function onDone(data){
  console.log(data);
}

alanreadFile(onDone)