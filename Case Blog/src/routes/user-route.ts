import express from "express";
import { getUser,getUsers,createUser,deleteUser,updateUser} from "../controllers/user-controller";


const router= express.Router()

router.get('/users', getUsers)
router.get('/users/:id',getUser)
router.post('/users', createUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)






export default router 