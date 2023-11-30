import { Router } from "express";
import UserLoginController from "../../controller/auth/userlogin.js";
import loginValidator from "../../validation/userlogin/index.js";
const UserLoginRouter = Router();
UserLoginRouter.post(
  "/register",
  loginValidator.register,
  UserLoginController.register
);
UserLoginRouter.post("/login", UserLoginController.login);
export default UserLoginRouter;
