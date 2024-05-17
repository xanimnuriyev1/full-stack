const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { type } = require('os');

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();
const {Schema}= mongoose

const userSchema= new Schema({
    imgSRC:{
        type: String,
        require:true
    },
    title :{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }
})
const User=mongoose.model("User",userSchema)
app.post("/users",async(req,res)=>{
    try{
        const {imgSRC,title,price}=req.body
        const user=new User ({
            imgSRC,
            title,
            price,
        })
     await  user.save()
        res.status(201).send(user)
    }
    catch (err){
        res.status(500).send(err)
    }
})
app.get("/users",async(req,res)=>{
    try{
     const users=await User.find({})
     res.status(200).send(users)
    }
    catch (err){
        res.status(500).send(err)
    }
})
app.delete("/users/:id",async(req,res)=>{
   try{
    const {id}=req.params
    const user= await User.findByIdAndDelete(id)
    res.status(200).send(user)
   }catch (err){
    res.status(500).send(err)
   }

})
app.get("/users/:id",async(req,res)=>{
    try{
    const {id}=req.params
    const user= await User.findById(id)
    res.status(200).send(user)
    }catch (err){
        res.status(500).send(err)
    }
})

const PORT=process.env.PORT
const DB=process.env.DB_URL

mongoose
.connect(DB)
.then(() => console.log('Connected!'));
app.listen(PORT,()=>console.log("Port listen",PORT))

