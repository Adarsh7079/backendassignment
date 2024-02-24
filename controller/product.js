import { Product } from "../schema/product.js";
import { isValidObjectId } from 'mongoose';

export const add = async (req, res) => {
  try {
    const { name, itemCode, category } = req.body;
    const product = new Product({ name, itemCode, category });
    await product.save();
    res.status(201).json({
      message: "user register",
    });
  } catch (error) {
    res.status(401).json({
      message: "something wrong",
      success: false,
      user: req.user,
    });
    console.log(error);
  }
};

// Get all products
export const getall = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific product by ID
export const getbyId = async (req, res) => {
  try {
    const id = req.params.id;
   
    const resp = await Product.findOne({_id: id });
    
    if (resp) {
        res.json({
            success:true,
            data:resp,
        });
    }
  } catch (error) {
    res.status(401).json({
      message: "something wrong",
      success: false,
    
    });
    console.log(error);
  }
};

export const updateproduct = async (req, res) => {
    try{
        const id=req.params.id;
        const updateUserData=req.body;
        const updateData=await Product.updateOne({_id:id},
            {
                $set:updateUserData
            })
            res.status(200).json(updateData)
    }
    catch (error) {
        res.status(401).json({
          message: "something wrong",
          success: false,
        
        });
        console.log(error);
      }
};

//delete user 
export const deleteproduct=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const respo=await Product.deleteOne({_id:id});
         if(respo)
         {
            res.json({
                success:true,
                
            });
         }
    }catch(error)
    {
        next(error)
    }
}
// filter by catergory 
export const filterbycategory= async (req,res)=>{
    try {
        // Make sure categoryId is a valid ObjectId
        const categoryId = req.params.categoryId;
        if (!isValidObjectId(categoryId)) {
            res.status(401).json({
                message: "invalid ID",
                success: false,
              
              });
        }
    
        // Find products by category
        const products = await Product.find({ category: categoryId });
        return products;
      } catch (error) {
        res.status(401).json({
            message: "something wrong",
            success: false,
          
          });
          console.log(error)
      }
}


// filter by name 
export const filterbyname= async (req,res)=>{
    try{
        const {name}=req.body;
        const resp= await Product.find({name:name});
        if(resp)
        {
            res.json({
                success:true,
                data:resp,
            });
        }
        else
        {
            res.status(401).json({
                message: "invalid name",
                success: false,
              
              });
        }

    }
    catch(error)
    {
        res.status(401).json({
            message: "something wrong",
            success: false,
          
          });
          console.log(error);
    }
}