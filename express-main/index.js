const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("dotenv").config();
require('./database/connection')
const port = process.env.PORT;

// midddleware
const bodyParser=require('body-parser')
const morgan=require('morgan')

// routes
const CategoryRoute = require('./route/categoryRoute')
const ProductRoute = require('./route/productRoute')
const orderRoute=require('./route/orderRoute')
// user route
const userRoute=require("./route/userRoute")
const app = express();

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser())

// routes
// category Route
app.use('/api', CategoryRoute)
// product Route
app.use("/api", ProductRoute)
// place order route
app.use("/api", orderRoute)



// file
app.use("/public/uploads",express.static("public/uploads"))

// user route
app.use("/api", userRoute)


// to access app/api from browser
app.listen(port, (req, res) =>{
    console.log(`server started at port ${port}`)
})


