import express from "express";
import { createOrder, getOrder,deleteOrder,editOrder } from "../controllers/order-controller";

const router=express.Router()
router.get('/order', getOrder)
router.post('/order', createOrder)
router.delete('/order/:id', deleteOrder)
router.put('/order/:id', editOrder)

export default router