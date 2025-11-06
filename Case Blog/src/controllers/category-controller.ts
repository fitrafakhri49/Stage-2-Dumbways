import { Request,Response } from "express";
import { prisma } from "../prisma/client";

export const getCategories= async(req:Request,res:Response)=>{
    try {
        const categories=await prisma.categories.findMany()
        res.status(200).json(categories)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Categories"})
        
    }
}
export const getCategory=async (req:Request,res:Response) => {

    try {
        const id=parseInt(req.params.id)
        const categories=await prisma.posts.findUnique({
            where:{id}
        }) 
        if (categories===null) {
            return res.status(404).json({error:"Categories Not Found"})
        }
        res.status(200).json({message:"Category Founded",categories})
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Specific Category"})
    }
}

export const createCategory=async (req:Request,res:Response) => {
    try {
        const {category}=req.body
        const createCategory=await prisma.categories.create({
            data:{category}
        })
        res.status(201).json({message:"Category Created",createCategory})
    } catch (error) {
  res.status(500).json({error:"Failed to Create Category"})
        
    }
}

export const deleteCategory=async (req:Request,res:Response) => {
    try {
        const id=parseInt(req.params.id)
        const deleteCategory=await prisma.categories.delete({
            where:{id}
        })
        res.status(201).json({message:"Category Successfully Deleted",deleteCategory})
    } catch (error) {
  res.status(500).json({error:"Failed to Delete Category"})
        
    }
}

export const updateCategory=async (req:Request,res:Response) => {
    try {
        const {category}=req.body
        const id=parseInt(req.params.id)
        const updateCategory=await prisma.posts.update({
         where:{id},
         data:{category} 
        })
        res.status(201).json({message:"Category Updated",updateCategory})
    } catch (error) {
  res.status(500).json({error:"Failed to Update Category"})
        
    }
}