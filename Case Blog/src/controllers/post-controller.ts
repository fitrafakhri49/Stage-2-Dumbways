import { Request,Response } from "express";
import { posts,Post } from "../models/post-model";

export const getPosts=(req:Request,res:Response)=>{
    res.json(posts);
}

export const createPosts=(req:Request,res:Response)=>{
    const {title,content,author}=req.body
    const newPost:Post={
        id:posts.length +1,
        title,
        content,
        author,
    }
    posts.push(newPost)
    res.status(201).json(newPost)
}