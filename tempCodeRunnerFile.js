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
