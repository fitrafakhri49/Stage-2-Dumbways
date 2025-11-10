// import { Request,Response } from "express";
// // import { products,Product } from "../models/model";
// import { prisma } from "../prisma/client";
// // import { products } from "../models/model";

// export const getProducts= async(req:Request, res:Response)=>{
// const {
//   sortBy,
//   order,
//   minPrice,
//   maxPrice,
//   limit,
//   offset
// }=req.query;
// const filters : any ={};
// if(minPrice) filters.price={gte:parseFloat(minPrice as string)}
// if(maxPrice) filters.price={
//   ...(filters.price||{}),
//   lte:parseFloat(maxPrice as string)
// }
// try {

//   const products =await prisma.product.findMany({
//     where:filters,
//     orderBy:{
//       [sortBy as string]:order as "asc " ||
// "desc"    },
//       take:Number(limit),
//       skip:Number(offset)
//   })
//   const total = await prisma.product.count({where:filters})
//   res.status(200).json({data:products,total})
// } catch (error) {
//   res.status(500).json({error:"Failed to Fetch Data"})
// }

// }

// export const createProduct=async(req:Request,res:Response)=>{
// try {
//   const{name,price,stock}=req.body
//  const createproduct= await prisma.product.create({
//     data:{name,price:parseFloat(price),stock}
//   }
//   );
//   res.status(201).json({message:"Product Has Been Created",createproduct})
// } catch (error) {
//   res.status(500).json({error:"Failed to create product"})
  
// }
// }


// export const getProduct= async(req:Request,res:Response)=>{
//   try {
//     const id = parseInt(req.params.id);
//     const getproduct=await prisma.product.findUnique({ where:{id}})
//     if (getproduct==null) {
//       res.status(404).json({error:"Product Not Found"})
//     }
//     res.status(200).json({message:"Product Has Been Found",getproduct})
//   } catch (error) {
//     res.status(500).json({error:"Failed to get specific product"})
//   }
// }

// export const updateProduct=async (req:Request,res:Response) => {
// try {
//   const numberId= parseInt(req.params.id)
//   const {name,price,stock}=req.body;
//   const updateProduct= await prisma.product.update({
//     where:{id:numberId},
//     data:{name,price,stock},
//   })

//   res.status(201).json({message:"Product Has Been Updated",updateProduct})
// } catch (error) {
//   res.status(500).json({error:"Failed to edit specific product"})
// }
// }

// export const deleteProduct=async (req:Request,res:Response)=>{
//   try {
    
//     const numberId=parseInt(req.params.id);
//     const deleteProduct=await prisma.product.delete({
//       where:{id:numberId},
//     })
//     res.status(200).json({message:"Product deleted",deleteProduct})
//   } catch (error) {
//   res.status(500).json({error:"Failed to delete specific product"})

//   }
// }

