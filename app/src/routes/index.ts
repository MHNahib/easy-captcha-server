import { Router } from "express";
import homecontroller from "../controllers/";

const router: Router = Router();

router.get("/", homecontroller);

export default router;
