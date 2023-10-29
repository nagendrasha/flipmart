import mongoose from "mongoose";

const loginSchema = mongoose.Schema({

    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
},{timestamp:true});

export default loginSchema;