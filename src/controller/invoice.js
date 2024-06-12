import { AddInvoice, getInvoice } from "../services/invoice.services.js";
import Product from "../models/product.model.js"
export const addInvoiceAndShow = async (req, res, next) => {
    try {
        await AddInvoice(req);
        const invoice = await getInvoice(req);
        if(!invoice) return res.render('noitems',{
            message:"No invoice"
        })
        let products = [];
        console.log("Invoice:" +invoice)
        for(const pr of invoice.products){
            const product = await Product.findById(pr.idProduct);
            console.log(product)
            products.push({
                img:product.img,
                name:product.name,
                quanity:pr.quantity,
                price:pr.price
            })
        }
        return res.render('pages/invoice',{
            totalPrice:invoice.totalPrice,
            products:products,
            idInvoice:invoice._id
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const addInvoice = async (req,res) => {
    try{
        await AddInvoice(req);
        res.redirect('/')
    }catch(e){
        return res.status(500).json({
            message:"Errror"
        })
    }
}