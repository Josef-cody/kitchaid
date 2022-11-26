const mongoose = require("mongoose")

        const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trime: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }

});
        const User = new mongoose.model("UserModel", userSchema)

module.exports = User;