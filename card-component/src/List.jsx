
function List(){
  const fruits = [{id: 1, name: "apple", calories: 92},
    {id: 2, name: "banana", calories: 22},
    {id: 3, name: "pineapple", calories: 42},
    {id: 4, name: "watermelon", calories: 57},
    {id: 5, name: "coconut", calories: 47},]



  //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Sorting in Alphabetical order
 // fruits.sort((a,b) => b.name.localeCompare(a.name)); // in reverse alphabet 
  fruits.sort((a,b) => a.calories - b.calories);  //Numeric
  // fruits.sort((a,b) => b.calories - a.calories);  //reverse numeric

  
  const listitems = fruits.map(fruit => <li key={fruit.id}> {fruit.name} : &nbsp; <b> {fruit.calories} </b></li>)

  return(<ul>{listitems}</ul>)

}

export default List