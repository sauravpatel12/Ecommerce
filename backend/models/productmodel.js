const mongoose  = require("mongoose");

//structure of database
const productschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"  ]
    },
    description:{
        type:String,
        require:[true,"please enter description"]
    },
    price:{
        type:Number,
        required:[true,"please enter price"],
        maxLength:[8,"price can not exceed"]
        
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:[true,"enter valid url"]
            }
        }
    ],
    category:{
        type:String,
        // required:[true,"please enter product categpry"],
        
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"cannot exceed 4 character"],
        default:1

    },
    numofreview:{
          type:Number,
          default:0

    },
    reviews:[
        {
            name:{
                    type:String,
                    
            },
            rating:{
                type:Number,
                required:true,
                default:0
            },
            comment:{
                type:String,
            
            }
        
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }


    
})

module.exports = mongoose.model("Product",productschema);