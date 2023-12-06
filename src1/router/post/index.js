import { Router } from "express";
import postController from "../../controller/post/index.js";
const postRouter = Router();
postRouter.post("/", postController.create);
postRouter.get("/", postController.getall);
postRouter.get("/:id", postController.post);
postRouter.get("/:id/like", postController.like);
postRouter.get("/:id/comment", postController.Comment);
postRouter.get("/:id/user", postController.users);
// postRouter.get("/post", postController.getone);
postRouter.delete("/:id", postController.delete);
postRouter.put("/:id", postController.update);

export default postRouter;
