const cors =require('cors') 
const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/crudappdb'
const bodyparse=require('body-parser')

const app=express()

app.use(bodyparse.urlencoded({ extended: true }));
app.use(bodyparse.json());
app.use(cors());

mongoose.connect(url, {useNewUrlParser:true})
const con =mongoose.connection



con.on('open',function(){
    console.log('connected..')
})

const userRouter=require('./routes/user')

app.use('/user',userRouter)

app.listen(9000, function(){
    console.log('server started')
})