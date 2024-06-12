import express from 'express';
import { getCart,addProductToCart } from '../controller/cart.js';
import { addProduct } from '../services/cart.services.js';
const cartRouter = express.Router();
cartRouter.get('/',getCart);
cartRouter.post('/addproduct/',addProduct);
export default cartRouter;
