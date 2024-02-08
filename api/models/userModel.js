const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
//timestamps:true -> user creation and user updation time

const User = mongoose.model('User', userSchema);

module.exports = User;