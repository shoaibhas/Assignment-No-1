import likeModel from "../../model/like/like.js";
import userModel from "../../model/user/user.js";

const likeController = {
  create: async (req, res) => {
    try {
      const { emoji, userId } = req.body;
      const like = await likeModel.create({
        emoji,
        userId,
      });
      return res.status(201).json({ message: "like created", like });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },

  sample: async (req, res) => {
    const show = await likeModel.findByPk(4, {
      include: [userModel],
    });
    res.json(show);
  },
  getall: async (req, res) => {
    try {
      const like1 = await likeModel.findAll();
      return res.status(201).json({ message: "get all likes", like1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  getone: async (req, res) => {
    try {
      const { id } = req.body;
      const like2 = await likeModel.findOne({
        where: { id },
      });
      if (!like2) {
        return res.status(201).json({ message: "like not found", like2 });
        //   } else {
        //     return res.status(201).json({ message: "like found", like2 });
      }
      res.json(like2);
    } catch (err) {
      res.status(201).json({ message: "somrthing wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.body;
      const like = await likeModel.findOne({ where: { id } });
      if (!like) {
        return res.status(201).json({ message: "like not found" });
      }
      await like.destroy();
      return res.json({ message: "deleted sucessfull" });
    } catch (err) {
      console.log("something bad");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.body;
      const { emoji } = req.body;
      const like = await likeModel.findOne({ where: { id } });
      if (!like) {
        return res.status(201).json({ message: "like not found" });
      }
      like.emoji = emoji;
      await like.save();
      return res.json({ message: "update sucessfull", like });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default likeController;
