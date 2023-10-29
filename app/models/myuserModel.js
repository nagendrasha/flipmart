import mongoose from "mongoose";
import myuserSchema from "../schemas/myuserSchema";


const Myuser = new mongoose.model('Myuser',myuserSchema);

export default Myuser;