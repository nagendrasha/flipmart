import mongoose from "mongoose";


const myuserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        required:true,
        type:Number

    },
    password:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    isActive:{
        required:true,
        type:Boolean
    }

},{timestamps:true});

export default myuserSchema;

