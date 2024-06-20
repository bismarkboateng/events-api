import { Router } from "express";
import {
   create, listSchool, getAllSchools,
   updateSchool, deleteSchool
} from "../controllers/schools.controllers";

const router = Router()

router.post("/create", create)
router.get("/:id/school", listSchool)
router.get("/all", getAllSchools)
router.put("/:id/school", updateSchool)
router.delete("/delete", deleteSchool)

export default router