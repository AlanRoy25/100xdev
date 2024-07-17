// using callback function

function square(n){
  return n*n
}

function cubes(n){
  return n*n*n
}


// function sumofSquares(a,b){
//   const val1 = square(a)
//   const val2 = square(b)

//   return val1 + val2
// }

// function sumofcubes(a,b){
//   const val1 = cubes(a)
//   const val2 = cubes(b)

//   return val1 + val2
// }
// so for using the  function we can use the callback

function sumofSomething(a,b,callback){
  const val1 = callback(a)
  const val2 = callback(b)

  return val1+ val2
}
const ans = sumofSomething(3,4, cubes)
console.log(ans);

