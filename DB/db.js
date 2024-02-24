import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        dbName:"Product"
    }).then(c=>console.log("connect data base "))
    .catch((e)=>console.log(e))
}