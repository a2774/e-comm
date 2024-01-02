const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name is required']
    },
    email:{
        type:String,
        required:true,
        message:"enter the email",
    },
    password:{
        type:String,
        require:true,
        message:"enter is strong password",
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;