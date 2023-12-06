import { Router } from "express";
import likeController from "../../controller/like/index.js";
const likeRouter = Router();
likeRouter.post("/", likeController.create);
likeRouter.get("/", likeController.getall);
likeRouter.get("/sample", likeController.sample);
likeRouter.get("/:id", likeController.getone);
likeRouter.delete("/:id", likeController.delete);
likeRouter.put("/:id", likeController.update);

export default likeRouter;
