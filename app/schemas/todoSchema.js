import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:false,
        default:false
    }
},{timestamps:true});


export default todoSchema;