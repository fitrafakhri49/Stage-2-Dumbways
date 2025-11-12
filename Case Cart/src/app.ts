import express from "express";
// import  transactionRoute from "./routes/transaction";
import productRoute from "./routes/product-route";
// import orderRoute from "./routes/order-route"
// import userRoute from "./routes/user-route"
import authorizationRoute from "./routes/auth";
import path from "path";
const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/v1", authorizationRoute)
app.use("/auth",productRoute)
app.use("/upload-image",express.static(path.join(__dirname,"uploads")))


app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})