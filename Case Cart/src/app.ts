import express from "express";
import  transactionRoute from "./routes/transaction";
// import productRoute from "./routes/product-route";
// import orderRoute from "./routes/order-route"
// import userRoute from "./routes/user-route"
const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/v1", transactionRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})