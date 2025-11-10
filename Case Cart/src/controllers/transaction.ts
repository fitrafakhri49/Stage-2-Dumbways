import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const transaction = async (req: Request, res: Response) => {
  const { productId, amount,supplierId} = req.body;


  try {
        if ( amount <= 0) {
            return res.status(400).json({ message: "Jumlah stock tidak boleh 0"});
          }
        const supplierExists = await prisma.supplier.findUnique({
          where: { id: supplierId }
        });
        if (!supplierExists) {
          return res.status(404).json({ message: `Supplier tidak ditemukan` });
        }
        
        const stockExists = await prisma.stock.findFirst({
            where: { productId,supplierId: supplierId  }
          });
          if (!stockExists) {
            return res.status(400).json({
              message: `Supplier dengan id ${supplierId} tidak dapat mengirim stock untuk product id ${productId}`
            });
          }      
        
    
    await prisma.$transaction(async (tx) => {
  
        // Update stock per supplier
        await tx.stock.updateMany({
          where: { productId, supplierId: supplierId },
          data: { stock: { increment: amount} }
        });

        // Update Supplier.stockAmount
        await tx.supplier.update({
          where: { id: supplierId },
          data: { stockAmount: { increment: amount } }
        });

        // Update Product.quantity langsung per update
        await tx.product.update({
          where: { id: productId },
          data: { quantity: { increment: amount } }
        });
      
    });

    res.status(200).json({ message: "Stock berhasil ditambahkan" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
