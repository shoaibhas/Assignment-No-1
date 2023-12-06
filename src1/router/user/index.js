import { Router } from "express";
import userController from "../../controller/user/index.js";
const userRouter = Router();
userRouter.post("/add", userController.create);
userRouter.get("/user", userController.getall);
userRouter.get("/:id", userController.getone);
userRouter.get("/:id/post", userController.posts);
userRouter.get("/:id/post/like", userController.likes);
userRouter.get("/:id/post/comment", userController.comment);
userRouter.get("/:id/follower", userController.follower);
userRouter.get("/:id/follower/followerpost", userController.usertofollowerpost);
userRouter.get("/:id/follower/userpost", userController.followertouserpost);
userRouter.delete("/:id", userController.delete);
userRouter.put("/:id", userController.update);

export default userRouter;
