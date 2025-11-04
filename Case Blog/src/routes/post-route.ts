import express from "express";
import { getPosts,getPost,createPost,deletePost,updatePost } from "../controllers/post-controller";


const router= express.Router()

router.get('/posts', getPosts)
router.get('/posts/:id',getPost)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.put('/posts/:id', updatePost)





export default router 