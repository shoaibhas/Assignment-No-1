import { Router } from "express";
import followerController from "../../controller/follower/follower.js";
const followerRouter = Router();
followerRouter.post("/add", followerController.create);
followerRouter.get("/followers", followerController.getall);
followerRouter.get("/follower", followerController.getone);
followerRouter.put("/del", followerController.delete);
followerRouter.get("/update", followerController.update);
export default followerRouter;
