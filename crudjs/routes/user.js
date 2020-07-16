const express = require('express')

const router =  express.Router()
const User =require('../models/user1')
const { addListener } = require('../models/user1')



router.get('/', async(req,res) =>{
    try{
        const user=await User.find()
        res.json(user)
    }catch(err){
        res.send('error'+ err)
    }
})

router.get('/:id', async(req,res) =>{
    try{
        const user=await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send('error'+ err)
    }
})

router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    })
    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/update/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        user.name=req.body.name
        user.email=req.body.email,
        user.password=req.body.password,
        user.phone=req.body.phone,
        user.gender=req.body.gender
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        user.name=req.body.name
        user.email=req.body.email,
        user.password=req.body.password,
        user.phone=req.body.phone
        const a1 = await user.remove()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router