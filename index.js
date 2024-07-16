// object method explaination

function objectMethods(obj){
  console.log("original obj:", obj)


let keys = Object.keys(obj);
  console.log("After object.keys()", keys);

let values = Object.values(obj);
console.log("After object.values()", values);

let entries = Object.entries(obj);
console.log("After object.entries()", entries);

let hasProp = Object.hasOwnProperty("property");
console.log("After hasOwnProperty()", hasProp)

let newObj = Object.assign({},obj, {newProperty: "newValue"});
console.log("After Object.assign()", newObj)

}

const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  
};

objectMethods(sampleObject);