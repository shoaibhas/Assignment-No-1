import { Router } from "express";
import postController from "../../controller/post/index.js";
const postRouter = Router();
postRouter.post("/adds", postController.create);
postRouter.get("/post", postController.getall);
postRouter.get("/postid", postController.post);
postRouter.get("/postid/like", postController.like);
postRouter.get("/postid/comment", postController.Comment);
postRouter.get("/postid/users", postController.users);
// postRouter.get("/post", postController.getone);
postRouter.delete("/del", postController.delete);
postRouter.put("/update", postController.update);

export default postRouter;
