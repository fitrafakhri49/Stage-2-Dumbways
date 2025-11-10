import express from "express";
import { transaction } from "../controllers/transaction";



const router=express.Router()

router.post('/supplier/stock',transaction)
// router.get('/supplier/:id',)

export default router