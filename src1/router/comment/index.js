import { Router } from "express";
import commentController from "../../controller/comment/index.js";
const commentRouter = Router();
commentRouter.post("/", commentController.create);
commentRouter.get("/", commentController.getall);
// commentRouter.get("/postid", commentController.post);
// commentRouter.get("/postid/like", commentController.like);
commentRouter.get("/:id", commentController.getone);
commentRouter.delete("/:id", commentController.delete);
commentRouter.put("/:id", commentController.update);

export default commentRouter;
