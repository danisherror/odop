const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
//name,email,phoneno,age,weight,height,address,city
const userSchema=mongoose.Schema({
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
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            number_of_item:{
                type: Number
            },
            
        }

    ],
    createdAt:{
        type:Date,
        default:Date.now()
    },

})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,10) 
})

// userSchema.methods.validatePassword=async function(sendPassword){
//     return await bcrypt.compare(sendPassword,this.password)
// }       
userSchema.methods.isValidatedPassword=async function(usersendPassword){
    return await bcrypt.compare(usersendPassword,this.password)                // this will return true /false result
}

// userSchema.methods.getjwtToken=()=>{
//     return jwt.sign({id:this._id},process.env.JWT_SECRET,{
//         expiresIn:process.env.JWT_EXPIRY
//     })
// }
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
         expiresIn:process.env.JWT_EXPIRY
     })
 }



module.exports=mongoose.model('User',userSchema)