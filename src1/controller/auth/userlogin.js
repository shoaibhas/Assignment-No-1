import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import UserLoginModel from "../../model/userlogin/user.js";
import postModel from "../../model/post/post.js";
import LoginEmail from "../../mails/email.js";
import followerModel from "../../model/follower/follower.js";
import likeModel from "../../model/like/like.js";
import userModel from "../../model/user/user.js";
import commentModel from "../../model/comments/comment.js";
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

  //get all user who registers
  getall: async (req, res) => {
    try {
      const user1 = await UserLoginModel.findAll();
      return res.status(201).json({ message: "get all users", user1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  //get one user
  getone: async (req, res) => {
    try {
      const { id } = req.params;
      const user2 = await UserLoginModel.findOne({
        where: { id },
      });
      if (!user2) {
        return res.status(201).json({ message: "user not found", user2 });
        //   } else {
        //     return res.status(201).json({ message: "user found", user2 });
      }
      res.json(user2);
    } catch (err) {
      res.status(201).json({ message: "somrthing wrong" });
    }
  },

  posts: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [postModel],
    });
    res.json(show);
  },
  follower: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [followerModel],
    });
    res.json(show);
  },

  usertofollowerpost: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [
        { model: followerModel, include: postModel },
        // followerModel.findAll({
        //   where: {
        //     userId: { [Op.eq]: 1 },
        //   },
        // }),
      ],
    });
    res.json(show);
  },
  followertouserpost: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [
        {
          model: followerModel,
          include: [{ model: UserLoginModel, include: postModel }],
        },
        // followerModel.findAll({
        //   where: {
        //     userId: { [Op.eq]: 1 },
        //   },
        // }),
      ],
    });
    res.json(show);
  },
  likes: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [postModel],
      include: [{ model: postModel, include: likeModel }],
    });
    res.json(show);
  },
  comment: async (req, res) => {
    const { id } = req.params;
    const show = await UserLoginModel.findByPk(id, {
      include: [postModel],
      include: [{ model: postModel, include: commentModel }],
    });
    res.json(show);
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserLoginModel.findOne({ where: { id } });
      if (!user) {
        return res.status(201).json({ message: "user not found" });
      }
      await user.destroy();
      return res.json({ message: "deleted sucessfull" });
    } catch (err) {
      console.log("something bad");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, password } = req.body;
      const user = await userModel.findOne({ where: { id } });
      if (!user) {
        return res.status(201).json({ message: "user not found" });
      }
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = password;
      await user.save();
      return res.json({ message: "update sucessfull", user });
    } catch (err) {
      console.log("something bad");
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
