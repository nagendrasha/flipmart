import itemSchema from "@/app/schemas/itemSchema";
import mongoose from "mongoose";


const Item = new mongoose.model('Item',itemSchema);


export default Item;