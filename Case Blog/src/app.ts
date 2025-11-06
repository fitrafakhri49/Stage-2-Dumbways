import  express  from "express";
// import  userRoutes  from "./routes/user-route";
import postRoutes from "./routes/post-route"
import categoryRoute  from "./routes/comment-route";
import commentRoute  from "./routes/category-route";

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", postRoutes,categoryRoute,commentRoute)
app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})