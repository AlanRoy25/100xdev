const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "secret"
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
  
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if(!usernameResponse.success || !passwordResponse.success){
    return null;
  }
  const signature = jwt.sign({
    username
  }, password)
  return signature;
}

const ans = signJwt("alas@gmail.com", "asdsdaadds");
console.log(ans);

function decodeJwt(token){
  //returns true or false even without the secret known jwtpassword known
  const decoded = jwt.decode(token);
  if(decoded){
    return true;
  }
  else {
    return false;
  }

}

function verifyJwt(token){
  let ans = true;
  try {
    jwt.verify(token, jwtPassword)
  } catch (error) {
    ans = false;
  }
  return ans;
}


console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsYXNAZ21haWwuY29tIiwiaWF0IjoxNzIxNzE4MTIwfQ.XXnQdKn08iK9g5RHcjkZQky-Dl4kqXhR9eKMTbVPgx4")) 
console.log(verifyJwt("secret"))