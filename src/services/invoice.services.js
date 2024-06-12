import Invoice from "../models/invoice.model.js";

export const AddInvoice = async (req) => {
    try {
        console.log("Add invoice");

        // Lấy sản phẩm từ session
        const productInCard = req.session.cart ? [...req.session.cart] : [];
        // Kiểm tra xem sản phẩm có tồn tại không
        if (!productInCard) throw new Error("Product in cart is not available");
        console.log("Product In card: "+productInCard)
        let totalPrice = 0;
        productInCard.forEach(pr => {
            totalPrice += pr.price * pr.quantity;
        });
        let products = [];
        productInCard.forEach(pr => {
          products.push({
            idProduct:pr.id,
            quantity:pr.quantity,
            price:pr.price
          })
        })
        // Tạo mới hoá đơn
        const invoice = new Invoice({
            products: products,
            totalPrice: totalPrice
        });

        // Lưu hoá đơn vào database
        const newInvoice = await invoice.save();

        // Xóa sản phẩm khỏi session cart
        req.session.cart = null;

        // Lưu ID của hoá đơn vào session
        req.session.idInvoice = newInvoice._id;
    } catch (error) {
        console.log("Error adding invoice:", error.message);
        throw error;
    }
};

export const getInvoice = async (req) => {
    try {
        // Lấy ID hoá đơn từ session
        const id = req.session.idInvoice;
        // Tìm hoá đơn trong database dựa trên ID
        const invoice = await Invoice.findById(id);
        return invoice; // Trả về hoá đơn
    } catch (error) {
        console.log("Error getting invoice:", error.message);
        throw error;
    }
};
