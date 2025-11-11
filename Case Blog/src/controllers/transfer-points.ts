import {Request,Response } from "express";
import { prisma } from "../prisma/client";

export const transferPoints=async(req:Request,res:Response,next:any)=>{
    // const {amount,senderId,receiverId}=req.body;
    // // console.log(senderId,amount,receiverId)
    // try {
    //     if(amount<=0){
    //         res.status(400).json({message:'jumlah poin harus lebih dari 0'});
    //     }
    //     const[sender,receiver]=await Promise.all([
    //         prisma.users.findUnique({where:{id:senderId}}),
    //         prisma.users.findUnique({where:{id:receiverId}}),
            
    //     ])
    //     if (!sender) {res.status(404).json({message:'sender tidak ditemukan'})
    //     return}  
    //     if (!receiver) {res.status(404).json({message:'receiver tidak ditemukan'})
    // return}

    //     if (sender.points<amount) {
    //         res.status(404).json({message:'Points tidak mencukupi'})}
    //         await prisma.$transaction(async (tx) => {
    //             await tx.users.update({
    //                 where:{id:senderId},
    //                 data:{points:{decrement:amount}}
    //             })
    //             await tx.users.update({
    //                 where:{id:receiverId},
    //                 data:{points:{increment:amount}}
    //             })
    //             res.status(200).json({message:"transfer poin berhasil"})
    //         })
    // } catch (error) {
    //     res.status(500).json({message:'Internal Server error'})
    // }
}

export const userPoints=async (req:Request,res:Response,next:any) => {
try {
    // const userId=Number(req.params.id)
    // const userPoints= await prisma.users.findUnique({
    //     where:{id:userId},
    //     select:{
    //         id:true,
    //         points:true
    //     },
    // })
    // res.status(200).json({message:"data ditemukan", data:userPoints})

} catch (error) {
    // next(error)
    
}
}

