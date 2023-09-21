const mongoose=require('mongoose')
const Product=require('../models/product')
const BigPromise=require('../middleware/bigpromise')
const jwt=require('jsonwebtoken')
const Artist=require('../models/artist')

exports.addproduct=BigPromise(async(req,res)=>{
    const token=req.params.token;
    const decode=jwt.verify(token,process.env.JWT_SECRET);

    console.log("Decode "+decode);
    const id=decode.id;

    const {name,description,price,instock,url}=req.body
    console.log("product!!!!!!!! "+name)
    console.log(id);
    const newproduct={name:name,description:description,price:price,instock:instock,url:url};
    const productExsist=await Product.findOne({artist:id})
    //console.log(productExsist);
    console.log("asdasdasdas");
    if(productExsist){
        // console.log("Record Exsist")
        
        const prevproduct=productExsist.product
        console.log(prevproduct);
        console.log("-----------------");
        console.log("product "+newproduct);
        //console.log("report "+report.Record);
        const arr=[]
        for(let i=0;i<prevproduct.length;i++)
        {   //.log(product[i])
            arr.push(prevproduct[i]);
        }
        arr.push(newproduct);
        const newData={
            artist:id,
            product:arr
        }

        await Product.findByIdAndUpdate(productExsist._id,newData)

        res.status(200).json({
            success:true
        })
    }
    else{
        console.log("new product for artist+ "+id);
        const product1=await Product.create({
            artist:id,
            product:newproduct
        })
        res.status(200).json(product1)
    }  
})



exports.viewproduct=BigPromise(async(req,res)=>{
    
    const token=req.params.token;
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    //console.log(decode) 
    const id=decode.id;
   
    const productExsist=await Product.findOne({artist:id})

    console.log("-------------------------------")
    if(productExsist)
    {
    console.log(productExsist)
    res.status(200).json(
        productExsist.product
    )
    }
    else{
        res.status(422).json();
    }
})
