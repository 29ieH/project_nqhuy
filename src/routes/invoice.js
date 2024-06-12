import express from 'express';
import {addInvoiceAndShow,addInvoice } from "../controller/invoice.js"
const invoiceRouter = express.Router();
invoiceRouter.get('/addandshow',addInvoiceAndShow)
invoiceRouter.post('/addinvoice',addInvoice)
export default invoiceRouter