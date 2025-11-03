import express from "express";
import { createProduct, deleteProduct, editProduct, getProduct } from "../controllers/product-controller";

const router=express.Router()
router.get('/product', getProduct)
router.post('/product',createProduct)
router.delete('/product/:id', deleteProduct)
router.put('/product/:id', editProduct)
export default router