import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    itemCode:{
        type:String,
        required:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'

    }
})

export const Product = mongoose.model('Product',schema);