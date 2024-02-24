import {Category} from "../schema/Category.js"


// Create a new category
export const create=async(req,res)=>{
    try{
        const category = await Category.create(req.body);
        res.status(201).json(category);
    }
    catch(error)
    {
        res.status(401).json({
            message: "something wrong",
            success: false,
            user: req.user,
          });
          console.log(error);
    }
}

// get all category 

export const getall=async(req,res)=>{
    try {
        const categories = await Category.find();
        res.json(categories);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

