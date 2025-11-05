import express from "express";
import { createOrder, getOrder,deleteOrder,updateOrder, getOrders } from "../controllers/order-controller";

const router=express.Router()
router.get('/order', getOrders)
router.get('/order/:id', getOrder)
router.post('/order', createOrder)
router.delete('/order/:id', deleteOrder)
router.put('/order/:id', updateOrder)

export default router