import  express  from "express";
// import  userRoutes  from "./routes/user-route";
import postRoutes from "./routes/post-route"
import categoryRoute  from "./routes/comment-route";
import commentRoute  from "./routes/category-route";
import transferRoute from "./routes/transfer-point";

const app=express()
app.use((err:any,req:any,res:any,next:any)=>{
    console.log(err)
    res.status(err.status||500).json({error:err.mesage || "internal server error"})

}
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", postRoutes,categoryRoute,commentRoute,transferRoute)
app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})