const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-com-2');
db = mongoose.connection;
db.on('error', console.error.bind(console,'db is not connect'));
db.once('open', function(){
    console.log('db is connect');
})