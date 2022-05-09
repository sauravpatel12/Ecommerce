const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:"backend/config/config.env"});




mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    
    console.log("connction succeessfuly")
}).catch((err)=>{
    console.log("err");
    console.log(err);

})


