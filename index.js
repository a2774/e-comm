const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/dbconnection');

const router = require('./src/user/user.routers')
app.use(express.json());
app.use('/api/user', router);



app.listen(port, function(err){
    if(err){
        console.log('server is error on port', port);
    }
    console.log('server is running on port', port);
})