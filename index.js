const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/dbconnection');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userrouter = require('./src/user/user.routers')
const productrouter = require('./src/products/product.router');
const cartrouter = require('./src/spoingCard/card.router');

app.use('/api/user', userrouter);
app.use('/product', productrouter);
app.use('/shoppcard', cartrouter);



app.listen(port, function(err){
    if(err){
        console.log('server is error on port', port);
    }
    console.log('server is running on port', port);
})