// // write a program for even nos

// const num = [1,2,3,4,5,6,7,8,9,10]

// function printEvenNos(array){
//   for (let i = 0; i < array.length; i++) {
//     if(array[i]%2 === 0){
//       console.log(array[i])
//     }
//   }
// }

// printEvenNos(num)

// find the largest no in the array--------------------

const num = [1,2,3,4,5,6,7,8,9,10]

function printLargestNumber(arr){
  if(arr.length === 0){
    console.log("Array is empty")
    return
  }

  let largest = arr[0]

  for(let i=1; i <arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i]
    }
  }
  console.log("The largest no is: " + largest);
}

printLargestNumber(num)