// Using zod for input validation 

const express = require ("express")
const app = express();
app.use(express.json());

const {z, object} = require ("zod")

  const signupSchema = z.object({
    username: z.string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name should be atleast of 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),
  
    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: " Invalid Email address"})
    .min(3, {message: "Email must be atleast 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),
  
    phone: z.string({
      required_error: "Phone is required"
    })
    .trim()
    .min(3, {message: "Phone must be atleast 10 characters"})
    .max(255, {message:"Phone no cannot be more than 10 characters"}),
  
    password: z.string({
      required_error: "Password is required"
    })
    .trim()
    .min(3, {message: "Password must be atleast 8 characters"})
    .max(255, {message:"Phone no cannot be more than 10 characters"}),
  
    });



    function validateInput(obj){
      const response = signupSchema.safeParse(obj);
      console.log(response); 
    }

    app.post("/login", (req,res) => {
      const response = validateInput(req.body)
      if(!response.success){
        res.json({
          msg: "your inputs are invalid"
        })
        return;
      }
    })
      

validateInput({
  email: "aslams@gmail.com",
  username: "ALAN213",
  password: "add",
  phone: "21664655"
  
})
module.exports = signupSchema;

app.listen(3000)