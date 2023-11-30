import { Router } from "express";
import userFollowerController from "../../controller/userfollower/userfollower.js";
const userFollowerRouter = Router();
userFollowerRouter.post("/add", userFollowerController.create);
userFollowerRouter.get("/followers", userFollowerController.getall);
userFollowerRouter.get("/user", userFollowerController.user);
userFollowerRouter.get("/user/follower", userFollowerController.follower);
userFollowerRouter.get("/follower", userFollowerController.user1);
userFollowerRouter.get("/follower/user", userFollowerController.follower1);
userFollowerRouter.get("/follower/userpost", userFollowerController.follower11);
// userFollowerRouter.get("/follower/user1", userFollowerController.get);
export default userFollowerRouter;