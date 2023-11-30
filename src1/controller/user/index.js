import { Op } from "sequelize";
import followerModel from "../../model/follower/follower.js";
import likeModel from "../../model/like/like.js";
import postModel from "../../model/post/post.js";
import userModel from "../../model/user/user.js";

const userController = {
  create: async (req, res) => {
    try {
      const { userName } = req.body;
      const user = await userModel.create({
        userName,
      });
      return res.status(201).json({ message: "user created", user });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },
  getall: async (req, res) => {
    try {
      const user1 = await userModel.findAll();
      return res.status(201).json({ message: "get all users", user1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  posts: async (req, res) => {
    const { id } = req.body;
    const show = await userModel.findByPk(id, {
      include: [postModel],
    });
    res.json(show);
  },
  follower: async (req, res) => {
    const { id } = req.body;
    const show = await userModel.findByPk(id, {
      include: [followerModel],
    });
    res.json(show);
  },
  post: async (req, res) => {
    const { id } = req.body;
    const show = await userModel.findByPk(id, {
      include: [
        { model: followerModel, include: [postModel] },
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
    const { id } = req.body;
    const show = await postModel.findByPk(id, {
      include: [likeModel],
      //  include: [likeModel],
    });
    res.json(show);
  },
  getone: async (req, res) => {
    try {
      const { id } = req.body;
      const user2 = await userModel.findOne({
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
  delete: async (req, res) => {
    try {
      const { id } = req.body;
      const user = await userModel.findOne({ where: { id } });
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
      const { id } = req.body;
      const { userName } = req.body;
      const user = await userModel.findOne({ where: { id } });
      if (!user) {
        return res.status(201).json({ message: "user not found" });
      }
      user.userName = userName;
      await user.save();
      return res.json({ message: "update sucessfull", user });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default userController;
