import express from "express";
import { getComment, getCommentByPost, getCommentSummary, getComments } from "../controllers/comment-controller";


const router= express.Router()

router.get('/comments', getComments)
router.get('/post/:id/comments', getCommentByPost)
router.get('/comments/:id',getComment)
router.get('/post/comments-summary',getCommentSummary)
// JANGAN DIHAPUS
// router.post('/posts', createPost)
// router.delete('/posts/:id', deletePost)
// router.put('/posts/:id', updatePost)





export default router