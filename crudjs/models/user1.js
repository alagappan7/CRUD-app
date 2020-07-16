const mongoose = require('mongoose')

const user1Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:"male"
    }
    
})

module.exports=mongoose.model('User',user1Schema)