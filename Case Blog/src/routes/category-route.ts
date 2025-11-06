import express from "express";
import { getCategories,getCategory,} from "../controllers/category-controller";


const router= express.Router()

router.get('/categories', getCategories)
router.get('/categories/:id',getCategory)
// router.post('/posts', createPost)
// router.delete('/posts/:id', deletePost)
// router.put('/posts/:id', updatePost)





export default router 