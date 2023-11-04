import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false,
        default:'/assets/images'

    },
    isAvailable:{
        type:Boolean,
        required:false,
        default:false
    },
    mid:{
        type:String,
        required:true
    }
})

export default categorySchema;