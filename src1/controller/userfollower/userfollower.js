import followerModel from "../../model/follower/follower.js";
import likeModel from "../../model/like/like.js";
import postModel from "../../model/post/post.js";
import userModel from "../../model/user/user.js";
import userFollowerModel from "../../model/userfollower/userfollower.js";

const userFollowerController = {
  create: async (req, res) => {
    try {
      const { userId, followerId } = req.body;
      const user = await userFollowerModel.create({
        userId,
        followerId,
      });
      return res.status(201).json({ message: " created", user });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },

  // create: async (req, res) => {
  //   await userFollowerModel.create({
  //     userId: "1",
  //     followerId: "1",
  //   });
  //   await userFollowerModel.create({
  //     userId: "1",
  //     followerId: "4",
  //   });
  //   res.json({ message: "created" });
  // },
  getall: async (req, res) => {
    try {
      const user1 = await userFollowerModel.findAll();
      return res.status(201).json({ message: "get all ", user1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  // getuserposttofollower: async (req, res) => {
  //   try {
  //     const user1 = await userFollowerModel.findAll({
  //       where: { userId: 1 },
  //     });
  //     const f = user1.map((ele) => ele.followerId);
  //     const fp = await postModel.findAll({
  //       where: { userId: f },
  //     });
  //     res.json({ message: "rty", fp });
  //     return res.status(201).json({ message: "get all ", user1 });
  //   } catch (err) {
  //     return res.status(201).json({ message: "something wrong", err });
  //   }
  // },
  // follower11: async (req, res) => {
  //   const { id } = req.body;
  //   const data1 = await followerModel.findByPk(id, {
  //     include: [postModel],
  //   });

  //   res.json({ message: "data get", data1 });
  // },
  user: async (req, res) => {
    const { id } = req.body;
    const data1 = await userModel.findByPk(id, {
      // include: [followerModel],
      // include: [{ model: actormodel, attributes: ["firstName", "lastName"] }],
    });

    res.json({ message: "data get", data1 });
  },
  follower: async (req, res) => {
    const { id } = req.body;
    const data1 = await userModel.findByPk(id, {
      include: [followerModel],
      //  include: [{ model: followerModel, attributes: ["followerName"] }],
    });

    res.json({ message: "data get", data1 });
  },
  user1: async (req, res) => {
    const { id } = req.body;
    const data1 = await followerModel.findByPk(id, {
      //  include: [postModel],
      //  include: [{ model: followerModel, attributes: ["followerName"] }],
    });

    res.json({ message: "data get", data1 });
  },
  follower1: async (req, res) => {
    const { id } = req.body;
    const data1 = await followerModel.findByPk(id, {
      include: [userModel],
      //  include: [{ model: followerModel, attributes: ["followerName"] }],
    });

    res.json({ message: "data get", data1 });
  },

  delete: async (req, res) => {
    try {
      const { id } = req.body;
      const user = await userFollowerModel.findOne({ where: { id } });
      if (!user) {
        return res.status(201).json({ message: " not found" });
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
      const { userId, followerId } = req.body;
      const user = await userFollowerModel.findOne({ where: { id } });
      if (!user) {
        return res.status(201).json({ message: " not found" });
      }
      user.userId = userId;
      user.followerId = followerId;
      await user.save();
      return res.json({ message: "update sucessfull", user });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default userFollowerController;
