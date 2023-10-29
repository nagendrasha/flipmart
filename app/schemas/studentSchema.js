import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    subjects:[
        {name:{type:String,required:true}}
    ]
    ,
    isActive:{
        type:Boolean,
        required:true
    }
},{timestamps:true});



export default studentSchema;