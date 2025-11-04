import { Request,Response } from "express";
// import { products,Product } from "../models/model";
import { prisma } from "../connection/client";
import { products } from "../models/model";

export const getProducts= async(req:Request, res:Response)=>{

try {
  const products =await prisma.product.findMany()
  res.status(200).json(products)
} catch (error) {
  res.status(500).json({error:"Failed to Fetch Data"})
}

}

export const createProduct=async(req:Request,res:Response)=>{
try {
  const{name,price}=req.body
 const product= await prisma.product.create({
    data:{name,price:parseFloat(price)}
  }
  );
  res.status(201).json(product)
} catch (error) {
  res.status(500).json({error:"Failed to create product"})
  
}
}


export const getProduct= async(req:Request,res:Response)=>{
  try {
    const id = parseInt(req.params.id);
    const product=await prisma.product.findUnique({ where:{id}})
    if(product===null){
      res.status(404).json({error:"Product not found"})
    }
    res.status(200).json(product)

  } catch (error) {
    res.status(500).json({error:"Failed to get specific product"})
  }
}

export const updateProduct=async (req:Request,res:Response) => {
try {
  const numberId= parseInt(req.params.id)
  const {name,price}=req.body;
  const updateProduct= await prisma.product.update({
    where:{id:numberId},
    data:{name,price},
  })
  if(!updateProduct){
    res.status(404).json({error:"product not found"})
  }
  res.status(201).json({updateProduct})
} catch (error) {
  res.status(500).json({error:"Failed to edit specific product"})
}
}

export const deleteProduct=async (req:Request,res:Response)=>{
  try {
    
    const numberId=parseInt(req.params.id);
    const deleteProduct=await prisma.product.delete({
      where:{id:numberId},
    })
    res.status(200).json({deleteProduct,message:"Product deleted",})
  } catch (error) {
  res.status(500).json({error:"Failed to delete specific product"})

  }
}

// export const getProduct=(req:Request,res:Response)=>{
//     res.json(products)
// }

// export const createProduct=(req:Request,res:Response)=>{
//     const {productName,detail}=req.body
//     const newProduct:Product={
//         id:products.length +1,
//         productName,
//         detail,

//     }
//     products.push(newProduct)
//     res.status(201).json(newProduct)
// }

// export const deleteProduct=(req:Request,res:Response)=>{
//     const {id}=req.params;
//     const index=products.findIndex((p)=>p.id==Number(id))
//     products.splice(index,1)
//     res.status(200).json({message:"product deleted"})
// }

// export const editProduct = (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { productName, detail } = req.body;

//     const product = products.find((p) => p.id === Number(id));
  
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
  
//     product.productName = productName ?? product.productName;
//     product.detail = detail ?? product.detail;
  
//     return res.status(200).json({
//       message: "Product edited",
//       product,
//     });
//   };
  
  