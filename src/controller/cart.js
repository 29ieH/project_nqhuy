import {addProduct} from "../services/cart.services.js";
export const getCart = async (req, res) => {
    try {
        const card = req.sesssion.card;
        if(!card) return res.render('noitems',{
            messge:'No product in cart'
        })
        return res.status(200).json({
            data:card
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}
export const addProductToCart = (req, res) => {
    addProduct(req,res);
}