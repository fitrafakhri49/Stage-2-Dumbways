import { Request,Response } from "express";
// import { products,Product } from "../models/model";
import { prisma } from "../prisma/client";
// import { products } from "../models/model";

export const getUsers= async(req:Request, res:Response)=>{

try {
  const products =await prisma.user.findMany()
  res.status(200).json(products)
} catch (error) {
  res.status(500).json({error:"Failed to Fetch Data"})
}

}

export const createUser=async(req:Request,res:Response)=>{
try {
  const{name,email}=req.body
 const user= await prisma.user.create({
    data:{name,email}
  }
  );
  res.status(201).json({message:"User Sucesfully Created",user})
} catch (error) {
  res.status(500).json({error:"Failed to create user"})
  
}
}


export const getUser= async(req:Request,res:Response)=>{
  try {
    const id = parseInt(req.params.id);
    const user=await prisma.user.findUnique({ where:{id}})
    if (user==null) {
      res.status(404).json({error:"User Not Found"})
    }
    res.status(200).json({message:"User Has Been Found",user})
  } catch (error) {
    res.status(500).json({error:"Failed to get specific user"})
  }
}

export const updateUser=async (req:Request,res:Response) => {
try {
  const numberId= parseInt(req.params.id)
  const {name,email}=req.body;
  const updateuser= await prisma.user.update({
    where:{id:numberId},
    data:{name,email},
  })

  res.status(201).json({message:"Update Successfull",updateuser})
} catch (error) {
  res.status(500).json({error:"Failed to edit specific user"})
}
}

export const deleteUser=async (req:Request,res:Response)=>{
  try {
    
    const numberId=parseInt(req.params.id);
    const deleteuser=await prisma.user.delete({
      where:{id:numberId},
    })
    res.status(200).json({deleteuser,message:"User deleted",})
  } catch (error) {
  res.status(500).json({error:"Failed to delete specific User"})

  }
}
