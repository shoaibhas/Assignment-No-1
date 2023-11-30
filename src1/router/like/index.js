import { Router } from "express";
import likeController from "../../controller/like/index.js";
const likeRouter = Router();
likeRouter.post("/", likeController.create);
likeRouter.get("/", likeController.getall);
likeRouter.get("/sample", likeController.sample);
likeRouter.get("/one", likeController.getone);
likeRouter.delete("/", likeController.delete);
likeRouter.put("/", likeController.update);

export default likeRouter;
