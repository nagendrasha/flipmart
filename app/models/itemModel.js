import itemSchema from "@/app/schemas/itemSchema";
import mongoose from "mongoose";


const Item = mongoose.models.Item || new mongoose.model('Item',itemSchema);

export default Item;