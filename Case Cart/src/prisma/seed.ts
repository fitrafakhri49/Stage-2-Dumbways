import { prisma } from "./client";


async function main() {
    await prisma.order.deleteMany()
    await prisma.product.deleteMany()
    await prisma.user.deleteMany()
   
   

    // create users
    const users =await prisma.user.createMany({
        data:[
            {name:"Fakhri 1",email:"fakhri1@example.com"},
            {name:"Fakhri 2",email:"fakhri2@example.com"},
            {name:"Fakhri 3",email:"fakhri3@example.com"},
            {name:"Fakhri 4",email:"fakhri4@example.com"}

        ]
    })




// create product 
const product=await prisma.product.createMany({
    data:[
        {name:"coki-coki",price:5000,stock:12},
        {name:"fanta",price:6000,stock:15},
        {name:"fanta",price:7000,stock:18},
        {name:"le mineral",price:8000,stock:18}
    ],
});
// create orders 
const orders = await prisma.order.createMany({
    data:[
        {userId:1,productId:1,quantity:3},
        {userId:2,productId:4,quantity:5},
        {userId:3,productId:1,quantity:9},
        {userId:1,productId:1,quantity:8},
        {userId:4,productId:1,quantity:3}
    ]
})
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