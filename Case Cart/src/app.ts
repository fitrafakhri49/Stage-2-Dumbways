import express from "express";
import productRoute from "./routes/product-route";
import orderRoute from "./routes/order-route"
const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/v1", productRoute,orderRoute)

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})