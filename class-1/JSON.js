const users = '{"name": "Alan", "Age": "23", "Gender": "Male" }'

//JSON.parse
//JSON.stringify

const user = JSON.parse(users)
console.log(user["Gender"]);