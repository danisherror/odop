const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
//name,email,phoneno,age,weight,height,address,city
const adminSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    phoneno:{
        type:Number
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    url:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

})

adminSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,10) 
})

// adminSchema.methods.validatePassword=async function(sendPassword){
//     return await bcrypt.compare(sendPassword,this.password)
// }       
adminSchema.methods.isValidatedPassword=async function(usersendPassword){
    return await bcrypt.compare(usersendPassword,this.password)                // this will return true /false result
}

// adminSchema.methods.getjwtToken=()=>{
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{
//         expiresIn:process.env.JWT_EXPIRY
//     })
// }
adminSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
         expiresIn:process.env.JWT_EXPIRY
     })
 }



module.exports=mongoose.model('Admin',adminSchema)