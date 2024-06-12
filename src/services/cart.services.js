import { getProductById } from "./product.services.js";

export const addProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await getProductById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (!req.session.cart) {
            req.session.cart = [];
        }
        const index = req.session.cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            req.session.cart[index].quantity++;
            req.session.cart[index].price = req.session.cart[index].quantity * req.session.cart[index].price; 
        } else {
            req.session.cart.push({
                id: product.id,
                img:product.img,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        console.log(req.session.cart);
        return res.redirect("/");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
