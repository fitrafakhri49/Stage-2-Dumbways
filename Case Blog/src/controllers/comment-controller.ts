import  { Request,Response } from "express";
import { prisma } from "../prisma/client";


export const getComments= async(req:Request,res:Response)=>{
    const {
        sortBy,
        order,
        category,
        limit,
        offset
      }=req.query;
      const filters : any ={};
    //   if(minPrice) filters.price={gte:parseFloat(minPrice as string)}
    //   if(maxPrice) filters.price={
    //     ...(filters.price||{}),
    //     lte:parseFloat(maxPrice as string)
    //   }
    try {
        const users=await prisma.comments.findMany()
        res.status(200).json(users)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Users"})
    }
}
export const getComment=async (req:Request,res:Response) => {
    try {
        const id=parseInt(req.params.id)
        const user=await prisma.comments.findUnique({
            where:{
                id
            }
            
        })
        if (user===null) {
            return res.status(404).json({error:"Comment Not Found"})
        }
        res.status(200).json(user)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Comment"})
    }
}

export const getCommentByPost=async (req:Request,res:Response) => {
    const {
        sortBy,
        order,
        limit,
        offset
      }=req.query;
    try {
        const postId=parseInt(req.params.id)
        const comment=await prisma.comments.findMany({
            where:{
                postId
            },
            orderBy:{
                [sortBy as string]:order as "asc " ||
          "desc"    },
            take: Number(limit),
            skip:Number(offset)
            
        })
        if (comment===null) {
            return res.status(404).json({error:"Comment Not Found"})
        }
        res.status(200).json(comment)
    } catch (error) {
  res.status(500).json({error:"Failed to Fetch Comment"})
    }
}

export const getCommentSummary =async (req:Request,res:Response) => {
    const {
        sortBy,
        order,
        limit,
        offset,
        groupBy,
        minComment,
        maxComment
      }=req.query;
    //   const filters : any = { comments: { _count: {} } };


    // if (minComment) filters.comments._count.gte = Number(minComment);
    // if (maxComment) filters.comments._count.lte = Number(maxComment);
    const filters : any ={ comments: { _count: {} } };
    if(minComment) filters.comments._count={gte:parseFloat(minComment as string)}
    if(maxComment) filters.comments._count={
      ...(filters.comments._count||{}),
      lte:parseFloat(maxComment as string)
    }
      const group =(groupBy as any || 'postId')
      const sort=(sortBy as any )
    try {
        const summary=await prisma.comments.groupBy({
            having:filters,
            by:[group],
            
            _count:{
                comments:true
            },
            // having:filters,
            orderBy:{
                [sort]:order as "asc " ||
          "desc"    },
                take:Number(limit),
                skip:Number(offset),
            
        })
        res.status(200).json(summary)
    } catch (error) {
        res.status(500).json({
            error: "Failed to get specific Comment",
          });
    }
}


// JANGAN DIHAPUS
// export const createUser=async (req:Request,res:Response) => {
//     try {
//         const {author}=req.body
//         const createUser=await prisma.users.create({
//             data:{author}
//         })
//         res.status(201).json({createUser})
//     } catch (error) {
//         res.status(500).json({error:"Failed to Create User"})
//     }
// }

// export const deleteUser=async (req:Request,res:Response) => {
//     try {
//         const id=parseInt(req.params.id)
//         const deleteUser=await prisma.users.delete({where:{id}})
//         res.status(200).json({deleteUser,message:"Successfully Deleted"})
//     } catch (error) {

//   res.status(500).json({error:"Failed to Delete User"})
        
//     }
// }

// export const updateUser=async (req:Request,res:Response) => {
//     try {
//         const {author}=req.body
//         const id=parseInt(req.params.id)
//        const updateUser =await prisma.users.update({
//         where:{id},
//         data:{author}
//        })
//        res.status(201).json({updateUser,message:"Updated"})
//     } catch (error) {
//   res.status(500).json({error:"Failed to Update User"})
        
//     }
// }


// export const getPosts=(req:Request,res:Response)=>{
//     res.json(posts);
// }

// export const createPosts=(req:Request,res:Response)=>{
//     const {title,content,author}=req.body
//     const newPost:Post={
//         id:posts.length +1,
//         title,
//         content,
//         author,
//     }
//     posts.push(newPost)
//     res.status(201).json(newPost)
// }