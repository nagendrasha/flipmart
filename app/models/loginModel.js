import mongoose from "mongoose";
import loginSchema from "../schemas/loginSchema";


const Login = new mongoose.model('Login',loginSchema);

export default Login;