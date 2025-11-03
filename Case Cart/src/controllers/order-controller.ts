import { Request,Response } from "express";
import { products,orders,Order,} from "../models/model";

export const getOrder=(req:Request,res:Response)=>{
    res.json(orders);
}


export const createOrder=(req:Request,res:Response)=>{
    const {productId,quantity}=req.body;
    const product=products.find((p)=>p.id===Number(productId))
    if(!product){
        return res.status(400).json({message:"Produk Tidak Ditemukan"})
    }
    const newOrder:Order={
        id:orders.length +1,
        productId,
        quantity
    }
    orders.push(newOrder)
    res.status(201).json(newOrder)
}

export const editOrder=(req:Request,res:Response)=>{
    const {id}=req.params;
    const {quantity}=req.body;
    const order = orders.find((p)=> p.id === Number(id));
    if(!order){
        return res.status(404).json({message:"Id Order tidak ditemukan"})
    }
    order.quantity=quantity?? order.quantity;
    return res.status(200).json({
        message: "Order Telah Diedit"
    })
}

export const deleteOrder=(req:Request,res:Response)=>{
    const {id}=req.params;
    const index=orders.findIndex((p)=>p.id==Number(id))
    orders.splice(index,1)
    res.status(200).json({message:"order telah dihapus"})

}

