import mongoose from "mongoose";
import categorySchema from "../schemas/categorySchema";



const Categorie = mongoose.models.Category || new mongoose.model('Categorie',categorySchema);

export default Categorie;