import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import UserLoginModel from "../../model/userlogin/user.js";
import LoginEmail from "../../mails/email.js";
const UserLoginController = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await UserLoginModel.findOne({
        where: { email },
      });
      if (user) {
        return res
          .status(400)
          .json({ message: `this email ${email} is already exist..` });
      }
      const hashpassword = await hash(password, 10);
      await UserLoginModel.create({
        firstName,
        lastName,
        email,
        password: hashpassword,
      });
      res.status(200).json({ message: "user Registered" });
    } catch (error) {
      console.log({ message: "something bad", error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserLoginModel.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "invalid " });
      }
      const comparepassword = await compare(password, user.password);
      console.log(comparepassword);
      if (!comparepassword) {
        return res.status(401).json({ message: "invalid .." });
      }

      //practice for json token
      const data = {
        id: user.id,
        email: user.email,
        // password: user.password,
        // text: "test",
      };
      const token = Jwt.sign(data, process.env.JSON_SECRET, {
        expiresIn: "1h",
      });

      LoginEmail({
        from: "shoaibhassan",
        to: user.email,
        subject: "Login Notification",
        text: "We detected a new login ",
      });

      req.session.token = token;
      req.session.user = user;
      req.session.save();

      // req.session.token = token;
      // req.session.user = data;
      // req.session.save();
      return res.status(200).json({
        message: "User login",
        token,
        data,
      });
    } catch (error) {
      console.log({ message: "something bad happening", error });
    }
  },
};
export default UserLoginController;
