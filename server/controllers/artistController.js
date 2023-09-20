const mongoose=require("mongoose")
const BigPromise=require('../middleware/bigpromise')
const Artist=require('../models/artist')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



exports.signup=BigPromise(async (req,res)=>{
    
    console.log("req.files!!!!!!!!!!!!!!!!!!!!!!!!  ",req.body)
    console.log("req.files!!!!!!!!!!!!!!!!!!!!!!!!  ",req.file)
    const {name,email,password}=req.body

    const artist1=await Artist.findOne({email:email})
    const url="https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo=";
    if(artist1){
        return res.status(400).json({
            message:"User ALREADY EXSIST"
        })
    }
    if(!name || !email || !password){
       return res.status(401).json({
        success:true,
        message:"Please Provide The required Information"
       })
    }
    
   const artist= await  Artist.create({
        name,
        email,
        password,
        url
    })

    const token=artist.getJwtToken()

    res.status(200).json({
        success:true,
        artist,
        token
    })
    
})

exports.signIn=BigPromise(async (req,res)=>{

    const {email,password}=req.body
    console.log("password "+password)

    const artist=await Artist.findOne({email:email}).select("+password") 

    if(!artist)
    {
        return res.status(401).json({
            message:"User does not exsist Plz Signup"
        })
    }

    if(!await  bcrypt.compare(password,artist.password)){
       
        return res.status(401).json({
            message:"Password does not match "
        })
    }
    const token=artist.getJwtToken()
    res.status(200).json({
        artist,
        token
    })
    
})

exports.profile=BigPromise(async(req,res)=>{
    
    const token=req.params.token;
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decode) 
    
    const user=await Artist.findById(decode.id);

    res.status(200).json({
        user
    })
})
