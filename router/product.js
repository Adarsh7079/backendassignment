import express from "express"
const router=express.Router();
import {
    add, deleteproduct, filterbycategory, filterbyname, getall, getbyId, updateproduct
} 
from "../controller/product.js"


router.post("/add",add);
router.get("/all",getall);
router.get("/getid/:id",getbyId);
router.delete("/delete/:id",deleteproduct);
router.patch("/update/:id",updateproduct);
router.post("/getbycategory/:id",filterbycategory);
router.post("/getbyname",filterbyname);


export default router;