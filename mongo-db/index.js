const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

app.use(express.json())

// middleware for parsing request bodies

app.use(bodyParser.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

// any req that comes through /admin is connected to the router page
app.use('/admin', adminRouter)
app.use('/user', userRouter)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
})