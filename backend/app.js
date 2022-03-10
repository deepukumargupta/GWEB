const express = require('express')
const app = express();

// Initialize route
app.get('/',(req,res) => {
    res.send('Hello API!');
})

// port provide
app.listen(3000, ()=> {
    console.log('server is running on http://locahost:3000');
})