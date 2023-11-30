import { Router } from "express";
import commentController from "../../controller/comment/index.js";
const commentRouter = Router();
commentRouter.post("/a", commentController.create);
commentRouter.get("/a", commentController.getall);
// commentRouter.get("/postid", commentController.post);
// commentRouter.get("/postid/like", commentController.like);
commentRouter.get("/b", commentController.getone);
commentRouter.delete("/a", commentController.delete);
commentRouter.put("/a", commentController.update);

export default commentRouter;
