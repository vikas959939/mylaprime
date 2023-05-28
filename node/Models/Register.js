const mongoose = require('mongoose')
const schema = mongoose.Schema

const register = new schema({
    Name:{
        type:String
    },

    Email:{
        type:String
    },

    Department:{
        type:String
    },

    Password:{
        type:String
    },

    Date:{
        type:String
    },

    user_type:{
        type:String
    },

    leave_count:{
        type:Number
    }
})

module.exports = mongoose.model('register', register)