import { Router } from "express";
import followerController from "../../controller/follower/follower.js";
const followerRouter = Router();
followerRouter.post("/", followerController.create);
followerRouter.get("/", followerController.getall);
followerRouter.get("/:id", followerController.getone);
followerRouter.delete("/:id", followerController.delete);
followerRouter.put("/:id", followerController.update);
export default followerRouter;
