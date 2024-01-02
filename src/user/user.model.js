const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

// userSchema.pre('save', async function(next){
//     try {
//         if(!this.isModified('password')){
//             return next();
//         }
//         const salt = await bcrypt.genSalt(3);
//         const hashedpassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedpassword;
//         next();
//     } catch (error) {
//         return next(error);
//     }
// })

const User = mongoose.model('User', userSchema);
module.exports = User;