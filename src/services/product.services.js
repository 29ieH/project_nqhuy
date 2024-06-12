import Product from "../models/product.model.js";
export const getProducts =  async (req,res) =>{
    return await Product.find();
}
export const getProductById =  async (id) =>{
    return await Product.findById(id);
}
