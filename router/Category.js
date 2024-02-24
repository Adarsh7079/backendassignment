import express from "express"

const router=express.Router();
import {create,getall} from "../controller/category.js"


router.post("/new",create);
router.get("/all",getall);

export default router;