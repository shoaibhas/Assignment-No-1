import { Router } from "express";
import personcnicController from "../../controller/personcnic/personcnic.js";
const personcnicRouter = Router();
personcnicRouter.post("/create", personcnicController.create);
export default personcnicRouter;
