const Product = require("../models/productmodel")


//create product admin
exports.createProduct = async(req,res,next)=>{
    const product =await Product.create(req.body);
    res.status(201).send({
        success:true,
        product
    })
}

//get all products
exports.getAllProducts=async(req,res)=>{

    const  product=  await Product.find();
    res.status(200).send({status:true,
    product
    });
}

//update product admin

exports.updateProduct = async(req,res,next)=>{
   console.log(req.params.id);
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).send({
            success:false,
            message:"Product not found"
        }) 
    } 

 
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

res.status(200).send({
  success:true,
  product  
})
}