// function dateMethods(){
//   const currentDate = new Date()
//   console.log(currentDate);


//   console.log("day:", currentDate.getDay());
//   console.log("min:", currentDate.getMinutes());
//   console.log("Hours:", currentDate.getHours());
//   console.log("sec:", currentDate.getSeconds());
//   console.log("fullyear:", currentDate.getFullYear());
//   console.log("month:", currentDate.getMonth() +1); //it starts with 0 index so adding 1 to it.

// }
// dateMethods();
//////////
function currentTimePrint(){
  console.log(new Date().getTime());
}
setInterval(currentTimePrint, 100)