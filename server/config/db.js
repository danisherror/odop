const mongoose=require('mongoose');
mongoose.set('strictQuery',false) 

const connectWithDb=()=>{
    mongoose.connect("mongodb+srv://amrtanshu07:amrtanshu123@cluster0.84u1ug6.mongodb.net/odop")
    .then(console.log("Connected With The databse !!!!!!!!"))
    .catch(error=>{
        console.log("Some Error Occured")
    })
}

module.exports=connectWithDb