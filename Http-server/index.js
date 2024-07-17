const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//Parse application form
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
})