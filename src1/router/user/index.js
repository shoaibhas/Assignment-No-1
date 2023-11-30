import { Router } from "express";
import userController from "../../controller/user/index.js";
const userRouter = Router();
userRouter.post("/add", userController.create);
userRouter.get("/user", userController.getall);
userRouter.get("/userid", userController.getone);
userRouter.get("/user/post", userController.posts);
userRouter.get("/user/follower", userController.follower);
userRouter.get("/user/follower/post", userController.post);
userRouter.get("/user/post/like", userController.likes);
userRouter.delete("/del", userController.delete);
userRouter.put("/update", userController.update);

export default userRouter;
