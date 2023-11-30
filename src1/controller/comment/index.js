import commentModel from "../../model/comments/comment.js";

const commentController = {
  create: async (req, res) => {
    try {
      const { comment, postId } = req.body;
      const comment1 = await commentModel.create({
        postId,
        comment,
      });
      return res.status(201).json({ message: "comment created", comment1 });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },

  // sample: async (req, res) => {
  //   const show = await commentModel.findByPk(4, {
  //     include: [userModel],
  //   });
  //   res.json(show);
  // },
  getall: async (req, res) => {
    try {
      const comment1 = await commentModel.findAll();
      return res.status(201).json({ message: "get all comments", comment1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  getone: async (req, res) => {
    try {
      const { id } = req.body;
      const comment2 = await commentModel.findOne({
        where: { id },
      });
      if (!comment2) {
        return res.status(201).json({ message: "comment not found", comment2 });
        //   } else {
        //     return res.status(201).json({ message: "comment found", comment2 });
      }
      res.json(comment2);
    } catch (err) {
      res.status(201).json({ message: "somrthing wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.body;
      const comment = await commentModel.findOne({ where: { id } });
      if (!comment) {
        return res.status(201).json({ message: "comment not found" });
      }
      await comment.destroy();
      return res.json({ message: "deleted sucessfull" });
    } catch (err) {
      console.log("something bad");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.body;
      const { emoji } = req.body;
      const comment = await commentModel.findOne({ where: { id } });
      if (!comment) {
        return res.status(201).json({ message: "comment not found" });
      }
      comment.emoji = emoji;
      await comment.save();
      return res.json({ message: "update sucessfull", comment });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default commentController;
