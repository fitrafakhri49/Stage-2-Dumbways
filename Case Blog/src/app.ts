import  express  from "express";
import  userRoutes  from "./routes/user-route";
import postRoutes from "./routes/post-route"

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", postRoutes,userRoutes)
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})