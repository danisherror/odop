const express=require('express')
const app=express();
require('dotenv').config()
const connectWithDb=require('./config/db')


app.use(express.json())

connectWithDb()

app.listen(8000,()=>{
    console.log("Server is running on PORT 8000")
})

const artist=require('./routes/artist')
app.use("/api/artist",artist)


const product=require('./routes/product')
app.use("/api/product",product)


const user=require('./routes/user')
app.use("/api/user",user)
