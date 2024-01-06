const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/dbconnection');

const userrouter = require('./src/user/user.routers')
const productrouter = require('./src/products/product.router');
app.use(express.json());
app.use('/api/user', userrouter);
app.use('/product', productrouter);



app.listen(port, function(err){
    if(err){
        console.log('server is error on port', port);
    }
    console.log('server is running on port', port);
})