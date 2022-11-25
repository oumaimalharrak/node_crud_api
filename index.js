const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const app = express();

//setup the server port
const PORT = process.env.PORT || 5000;
dotenv.config();

//Define root route
app.get('/', (req, res)=>{
    res.send('hello')
})

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : false}))

//parse request data content type application/json
app.use(bodyParser.json())

//import employees routes
const employeeRoutes = require('./src/routes/employee.route')

//create employee 
app.use('/api/v1/employees', employeeRoutes)



app.listen(PORT,() => console.log(`app is running on port  ${PORT}`) )