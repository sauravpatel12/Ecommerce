const app=require('./app');
const dotenv=require("dotenv");
const createdatabase=require("./config/database");

dotenv.config({path:"backend/config/config.env"});

//connection database

app.listen(process.env.PORT,()=>{  

console.log(`server is working  on https://localhost:${process.env.PORT}`);
 
})        