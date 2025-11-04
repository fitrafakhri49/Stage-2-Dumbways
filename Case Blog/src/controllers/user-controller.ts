import  { Request,Response } from "express";
// import { posts,Post } from "../models/post-model";
import { prisma } from "../connection/client";


export const getUsers= async(req:Request,res:Response)=>{
    try {
        const users=await prisma.users.findMany()
        res.status(200).json(users)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Users"})
        
    }
}
export const getUser=async (req:Request,res:Response) => {
    try {
        const id=parseInt(req.params.id)
        const user=await prisma.users.findUnique({
            where:{
                id
            }
            
        })
        if (user===null) {
            return res.status(404).json({error:"User Not Found"})
        }
        res.status(200).json(user)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch User"})
        
    }
}

export const createUser=async (req:Request,res:Response) => {
    try {
        const {author}=req.body
        const createUser=await prisma.users.create({
            data:{author}
        })
        res.status(201).json({createUser})
    } catch (error) {
        res.status(500).json({error:"Failed to Create User"})
    }
}

export const deleteUser=async (req:Request,res:Response) => {
    try {
        const id=parseInt(req.params.id)
        const deleteUser=await prisma.users.delete({where:{id}})
        res.status(200).json({deleteUser,message:"Successfully Deleted"})
    } catch (error) {

  res.status(500).json({error:"Failed to Delete User"})
        
    }
}

export const updateUser=async (req:Request,res:Response) => {
    try {
        const {author}=req.body
        const id=parseInt(req.params.id)
       const updateUser =await prisma.users.update({
        where:{id},
        data:{author}
       })
       res.status(201).json({updateUser,message:"Updated"})
    } catch (error) {
  res.status(500).json({error:"Failed to Update User"})
        
    }
}


// export const getPosts=(req:Request,res:Response)=>{
//     res.json(posts);
// }

// export const createPosts=(req:Request,res:Response)=>{
//     const {title,content,author}=req.body
//     const newPost:Post={
//         id:posts.length +1,
//         title,
//         content,
//         author,
//     }
//     posts.push(newPost)
//     res.status(201).json(newPost)
// }