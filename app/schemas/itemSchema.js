import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    itemName:{
        type : String,
        required : true,
        trim:true
    },
    mrp:{
        type : Number,
        required:true
    },
    srp:{
        type:Number,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:false,
        default:false
       
    },
    description:{
        type:String,
        required:true,
    },
    isPopular:{
        type:Boolean,
    }
},{timestamps:true});

export default itemSchema;

