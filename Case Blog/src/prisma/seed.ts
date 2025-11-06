import { prisma } from "./client";




async function main() {
    await prisma.comments.deleteMany()
    await prisma.posts.deleteMany()
    await prisma.categories.deleteMany()
   
   

    // create users
    const category =await prisma.categories.createMany({
        data:[
            {category:"Category 1"},
            {category:"Category 2"},
            {category:"Category 3"},
            {category:"Category 4"},
            {category:"Category 5"},
        ]
    })




// create product 
const post=await prisma.posts.createMany({
    data:[
   {title:"Title 1",content:"Content 1",categoryId:1},
   {title:"Title 2",content:"Content 2",categoryId:2},
   {title:"Title 3",content:"Content 3",categoryId:3},
   {title:"Title 4",content:"Content 4",categoryId:4},
   {title:"Title 5",content:"Content 5",categoryId:5},
   {title:"Title 6",content:"Content 6",categoryId:4},
   {title:"Title 7",content:"Content 7",categoryId:2},
   {title:"Title 8",content:"Content 8",categoryId:3},
   {title:"Title 9",content:"Content 9",categoryId:3},
    ],
});
// create orders 
const orders = await prisma.comments.createMany({
    data:[
        {postId:1,comments:"comment 1"},
        {postId:2,comments:"comment 2"},
        {postId:3,comments:"comment 3"},
        {postId:4,comments:"comment 4"},
        {postId:5,comments:"comment 5"},
        {postId:1,comments:"comment 6"},
        {postId:5,comments:"comment 7"},
        {postId:2,comments:"comment 8"},
        {postId:3,comments:"comment 9"},
        {postId:2,comments:"comment 10"},
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