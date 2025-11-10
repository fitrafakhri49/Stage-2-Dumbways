import { prisma } from "./client";


async function main() {
    await prisma.stock.deleteMany()
    await prisma.product.deleteMany()
    await prisma.supplier.deleteMany()
   


   

    // create users
    // const users =await prisma.user.createMany({
    //     data:[
    //         {name:"Fakhri 1",email:"fakhri1@example.com"},
    //         {name:"Fakhri 2",email:"fakhri2@example.com"},
    //         {name:"Fakhri 3",email:"fakhri3@example.com"},
    //         {name:"Fakhri 4",email:"fakhri4@example.com"}

    //     ]
    // })




// create product 
const product=await prisma.product.createMany({
    data:[
        {name:"coki-coki"},
        {name:"fanta"},
    ],
});
 

// create supplier 
const supplier=await prisma.supplier.createMany({
    data:[
        {name:"supplier 1"},
        {name:"supplier 2"},
        {name:"supplier 3"},
        {name:"supplier 4"},
    ],
});


const stock = await prisma.stock.createMany({
    data: [
      { productId: 1, supplierId: 1, stock: 6}, 
      { productId: 1, supplierId: 3, stock: 6}, 
  
      { productId: 2, supplierId: 2, stock: 5 },     
      { productId: 2, supplierId: 4, stock: 5 },     
    ],
  });
  

// 1. Update Product.quantity
const allProducts = await prisma.product.findMany();
for (const p of allProducts) {
  const totalStock = await prisma.stock.aggregate({
    _sum: { stock: true },
    where: { productId: p.id },
  }).then(r => r._sum.stock || 0);

  await prisma.product.update({
    where: { id: p.id },
    data: { quantity: totalStock },
  });
}

// 2. Update Supplier.stockAmount
const allSuppliers = await prisma.supplier.findMany();
for (const s of allSuppliers) {
  const totalStock = await prisma.stock.aggregate({
    _sum: { stock: true },
    where: { supplierId: s.id },
  }).then(r => r._sum.stock || 0);

  await prisma.supplier.update({
    where: { id: s.id },
    data: { stockAmount: totalStock },
  });
}


// create orders 
// const orders = await prisma.order.createMany({
//     data:[
//         {userId:1,productId:1,quantity:3},
//         {userId:2,productId:4,quantity:5},
//         {userId:3,productId:1,quantity:9},
//         {userId:1,productId:1,quantity:8},
//         {userId:4,productId:1,quantity:3}
//     ]
// })


}



main()
.then( () => {
    console.log("seeding berhasil");
})
.catch(async (e) => {
    console.error(e)
})
.finally(async () => {
    await prisma.$disconnect
})