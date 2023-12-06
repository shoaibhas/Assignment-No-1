import { Router } from "express";
import UserLoginController from "../../controller/auth/userlogin.js";
import loginValidator from "../../validation/userlogin/index.js";
const UserLoginRouter = Router();
UserLoginRouter.post(
  "/register",
  loginValidator.register,
  UserLoginController.register
);
UserLoginRouter.get("/", UserLoginController.getall);
UserLoginRouter.get("/:id", UserLoginController.getone);
UserLoginRouter.get("/:id/post", UserLoginController.posts);
UserLoginRouter.get("/:id/post/like", UserLoginController.likes);
UserLoginRouter.get("/:id/post/comment", UserLoginController.comment);
UserLoginRouter.get("/:id/follower", UserLoginController.follower);
UserLoginRouter.delete("/:id", UserLoginController.delete);
UserLoginRouter.put("/:id", UserLoginController.update);
UserLoginRouter.get(
  "/:id/follower/followerpost",
  UserLoginController.usertofollowerpost
);
UserLoginRouter.get(
  "/:id/follower/userpost",
  UserLoginController.followertouserpost
);
UserLoginRouter.post("/login", UserLoginController.login);
export default UserLoginRouter;
