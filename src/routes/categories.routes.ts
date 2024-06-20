import { Router } from "express";
import {
   create, listCategory, getAllCategories,
   updateCategory, deleteCategory
} from "../controllers/categories.controllers";

const router = Router()

router.post("/create", create)
router.get("/:id/category", listCategory)
router.get("/all", getAllCategories)
router.put("/:id/category", updateCategory)
router.delete("/delete", deleteCategory)

export default router