const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const Database = require('./Database/db')
const router = require('./Routes/route')


const app = express()

mongoose.connect(Database.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('database connected successfully')
})

app.use(express.json())
app.use(bodyParser.json(),)
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(router)


app.listen(5555, ()=>{
    console.log('server running on localhost:5555')
})