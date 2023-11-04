import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim:true
    },
    cid:{
        type:String,
        required:true,
    },
    mid:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:'/assets/images'
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
    foodType:{
        type:String,
        required:true
    },
    isPopular:{
        required:false,
        default:false,
        type:Boolean
    },
    rating:{
        type:Number,
        required:false,
        default:0
    },
    review:{
        type:Number,
        required:false,
        default:0
    }
},{timestamps:true});

export default itemSchema;

