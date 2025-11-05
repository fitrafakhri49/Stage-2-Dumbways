import { Request,Response } from "express";
// import { products,orders,Order,} from "../models/model";
import { prisma } from "../prisma/client";

export const getOrders= async(req:Request, res:Response)=>{

    try {
      const orders =await prisma.order.findMany()
      res.status(200).json(orders)
    } catch (error) {
      res.status(500).json({error:"Failed to Fetch Data"})
    }
    
    }
    
    export const createOrder=async(req:Request,res:Response)=>{
    try {
      const{userId,productId,quantity}=req.body
     const createorder= await prisma.order.create({
        data:{userId,productId,quantity}
      }
      );
      res.status(201).json({message:"Order Has Been Created",createorder})
    } catch (error) {
      res.status(500).json({error:"Failed to create order"})
      
    }
    }
    
    
    export const getOrder= async(req:Request,res:Response)=>{
      try {
        const id = parseInt(req.params.id);
        const getorder=await prisma.order.findUnique({ where:{id}})
        if (getorder==null) {
          res.status(404).json({error:"OrderNot Found"})
        }
        res.status(200).json({message:"Order Has Been Found",getorder})
      } catch (error) {
        res.status(500).json({error:"Failed to get specific order"})
      }
    }
    
    export const updateOrder=async (req:Request,res:Response) => {
    try {
      const numberId= parseInt(req.params.id)
      const {userId,productId,quantity}=req.body;
      const updateorder= await prisma.order.update({
        where:{id:numberId},
        data:{userId,productId,quantity},
      })
    
      res.status(201).json({message:"Order Has Been Updated",updateorder})
    } catch (error) {
      res.status(500).json({error:"Failed to edit specific Order"})
    }
    }
    
    export const deleteOrder=async (req:Request,res:Response)=>{
      try {
        
        const numberId=parseInt(req.params.id);
        const deleteorder=await prisma.order.delete({
          where:{id:numberId},
        })
        res.status(200).json({message:"Product deleted",deleteorder})
      } catch (error) {
      res.status(500).json({error:"Failed to delete specific Order"})
    
      }
    }
    