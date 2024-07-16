// const dog = {
//   name: "shadow",
//   legs: 4,
//   breed: "lab"
// }

// const cat = {
//   name: "lucy",
//   legs: 2,
//   breed: "local"
// }

// function printAnimal(animal){
//   console.log( animal["name"] + animal["breed"] ); // here we have used console so down we call the function 
//   // if we use return statement then we would have used console.log for calling the function with the argument.
// }

// printAnimal((cat))

//// using the class

class Animal {
  constructor (name,legcount,speaks){ 
    this.name = name; // refers to an object this keyword
    this.legcount = legcount;
    this.speaks = speaks;
  }
  static mytype(){
  console.log("aminal");
  }// if we use static that means it is not attached to any object it is attached directly to the class.
  speak(){  // function
    console.log("hi there" + this.speaks);
  }
}

console.log(Animal.mytype())
let dog = new Animal ("dog",2, "bow bow") // here the new keyword is used when an instance of object by calling an constructor is used // create a object.
let cat = new Animal ("cat", 4 , "meow meow")

cat.speak()