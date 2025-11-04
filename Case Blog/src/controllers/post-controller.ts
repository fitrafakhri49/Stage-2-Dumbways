import { Request,Response } from "express";
import { prisma } from "../connection/client";

export const getPosts= async(req:Request,res:Response)=>{
    try {
        const users=await prisma.posts.findMany()
        res.status(200).json(users)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Posts"})
        
    }
}
export const getPost=async (req:Request,res:Response) => {

    try {
        const id=parseInt(req.params.id)
        const post=await prisma.posts.findUnique({
            where:{id}
        }) 
        if (post===null) {
            return res.status(404).json({error:"Post Not Found"})
        }
        res.status(200).json(post)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Post"})
        
    }
}

export const createPost=async (req:Request,res:Response) => {
    try {
        const {title,content,authorId}=req.body
        const createPost=await prisma.posts.create({
            data:{title,content,authorId}
        })
        res.status(201).json(createPost)
    } catch (error) {
  res.status(500).json({error:"Failed to Create Post"})
        
    }
}

export const deletePost=async (req:Request,res:Response) => {
    try {
        const id=parseInt(req.params.id)
        const deletePost=await prisma.posts.delete({
            where:{id}
        })
        res.status(201).json({deletePost,message:"Successfully Deleted"})
    } catch (error) {
  res.status(500).json({error:"Failed to Delete Post"})
        
    }
}

export const updatePost=async (req:Request,res:Response) => {
    try {
        const {authorId,title,content}=req.body
        const id=parseInt(req.params.id)
        const updatePost=await prisma.posts.update({
         where:{id},
         data:{authorId,title,content  } 
        })
        res.status(201).json({updatePost,message:"Post Updated"})
    } catch (error) {
  res.status(500).json({error:"Failed to Update Post"})
        
    }
}