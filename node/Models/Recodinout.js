const mongoose = require('mongoose')

const schema = mongoose.Schema

const record = new schema({

    Name:{
        type:String
    },

    EnrollMent:{
        type:String
    },

    Validity:{
        type:String
    },

    date:{
        type:String
    },

    In_time:{
        type:String
    },

    Out_time:{
        type:String
    }
    
})

module.exports = mongoose.model('record', record)