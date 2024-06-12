import express from 'express';
import productRouter from './product.js';
import routerCategory from './category.js';
import cartRouter from './cart.js';
const router = express.Router();
router.use('/cart', cartRouter);
router.use('/product', productRouter);
router.use('/category', routerCategory);
export default router;