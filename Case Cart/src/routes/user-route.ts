import express from "express";
// import { createProduct, deleteProduct, editProduct, getProduct } from "../controllers/product-controller";
import { getUsers,getUser,createUser, updateUser, deleteUser } from "../controllers/user-controller-route";
const router=express.Router()

router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.post('/user',createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
export default router