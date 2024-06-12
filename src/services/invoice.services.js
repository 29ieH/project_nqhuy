import Invoice from "../models/invoice.model.js";
export const AddInvoice =  async (req,res) => {
    try {
        const produtInCard = req.session.cart;
        if(!produtInCard) return res.status(404).json({message:"Product in cart is not available"})
            let totalPrice = 0;
            produtInCard.forEach(pr => totalPrice += pr)
            const invoice = new Invoice({
                products:produtInCard,
                totalPrice:totalPrice
            });
            const newInvoice =  await invoice.save();
            req.session.cart = null;
            req.session.idInvoice = newInvoice._id;
            return res.status(200).json({message:"Invoice created successfully"})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
export const getInvoice = async (req,res) => {
    try {
        if(req.session.idInvoice){
            id = req.session.idInvoice;
            const invoices = await Invoice.findById(id);
            if(!invoices) return res.render('noitems',{
                messsage:   'Invoice not found'
            })
            return res.render('invoices',{
                data:invoices
            })
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}