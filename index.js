import mongoose from "mongoose"
import express from "express"
import {config} from "dotenv"
import {connectDB} from "./DB/db.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import productRout from "./router/product.js"
import CategoryRout  from "./router/Category.js";


const app=express();


config({
    path:"./config.env"
});

connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

//using routes
app.use("/product/v1/users",productRout);
app.use("/category/v1/users",CategoryRout);



app.get("/",(req,res)=>{
    res.send("hello dear");
})
const port =process.env.PORT;
 app .listen(port,()=>{
    console.log(`app is runbning ${port}`)
});

