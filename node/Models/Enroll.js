const mongoose = require('mongoose')

const schema = mongoose.Schema

const enroll = new schema({
    Name:{
        type:String
    },

    Aadhar:{
        type:String
    },

    Mobile:{
        type:String
    },

    Start_Date:{
        type:String
    },

    End_Date:{
        type:String
    },

    Enrollment:{
        type:String
    },

    Dateof_Registration:{
        type:String
    }
})

module.exports = mongoose.model('enroll', enroll)