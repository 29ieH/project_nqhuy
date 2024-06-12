import {addProduct} from "../services/cart.services.js";
export const getCart = async (req, res) => {
    console.log("Get Cart")
    try {
        const cart = req.session.cart;
        console.log(cart);
        if(!cart) return res.render('noitems',{            
            message:'No product in cart'
        })
        // return res.status(200).json({
        //     data:cart
        // })
        return res.render('pages/cart',{
                data:cart
            })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
export const addProductToCart = (req, res) => {
    addProduct(req,res);
}