import express from "express";
// import { createProduct, deleteProduct, editProduct, getProduct } from "../controllers/product-controller";
import { createProduct,getProducts,getProduct, updateProduct, deleteProduct } from "../controllers/product-controller";
import { authenticate } from "../middlewares/auth";
const router=express.Router()

router.get('/suppliers/products', authenticate,getProducts,(req,res)=>
{res.json({message:"Protected route"})})
router.get('/suppliers/product/:id',authenticate, getProduct,(req,res)=>
{res.json({message:"Protected route"})})
router.post('/suppliers/product',authenticate,createProduct,(req,res)=>
{res.json({message:"Protected route"})})
router.put('/suppliers/product/:id', authenticate,updateProduct,(req,res)=>
{res.json({message:"Protected route"})})
router.delete('/suppliers/product/:id', authenticate,deleteProduct,(req,res)=>
{res.json({message:'Protected route'})})



export default router