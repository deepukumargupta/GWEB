const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Middleware for understandable frontend data in JSON
// app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Env file setup
require('dotenv/config');
const api = process.env.API_URL;

// Initialize route
app.get(`${api}/products`,(req,res) => {
    const product = {
        id: 1,
        name: 'Hair dresser',
        image: 'some_Url',
    }
    res.send(product);
})

//Post Request
app.post(`${api}/products`,(req,res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})
// Conect Database 
mongoose.connect()
// port provide
app.listen(3000, ()=> {
    console.log(api)
    console.log('server is running on http://locahost:3000');
})