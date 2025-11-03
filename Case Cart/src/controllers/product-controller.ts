import { Request,Response } from "express";
import { products,Product } from "../models/model";

export const getProduct=(req:Request,res:Response)=>{
    res.json(products)
}

export const createProduct=(req:Request,res:Response)=>{
    const {productName,detail}=req.body
    const newProduct:Product={
        id:products.length +1,
        productName,
        detail,

    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}

export const deleteProduct=(req:Request,res:Response)=>{
    const {id}=req.params;
    const index=products.findIndex((p)=>p.id==Number(id))
    products.splice(index,1)
    res.status(200).json({message:"product deleted"})
}

export const editProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { productName, detail } = req.body;

    const product = products.find((p) => p.id === Number(id));
  
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    product.productName = productName ?? product.productName;
    product.detail = detail ?? product.detail;
  
    return res.status(200).json({
      message: "Product edited",
      product,
    });
  };
  
  