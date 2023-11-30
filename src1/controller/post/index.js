import commentModel from "../../model/comments/comment.js";
import likeModel from "../../model/like/like.js";
import postModel from "../../model/post/post.js";
import userModel from "../../model/user/user.js";

const postController = {
  create: async (req, res) => {
    try {
      const { postType, userId, likeId } = req.body;
      const post = await postModel.create({
        postType,
        userId,
        likeId,
      });
      return res.status(201).json({ message: "post created", post });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },

  post: async (req, res) => {
    const { id } = req.body;
    const show = await postModel.findByPk(id, {
      //  include: [likeModel],
    });
    res.json(show);
  },
  like: async (req, res) => {
    console.log("asbjasjbasjdbasjhd");
    const { id } = req.body;
    const show = await postModel.findByPk(id, {
      include: [{ model: likeModel, include: [userModel] }],
    });
    res.json(show);
  },
  Comment: async (req, res) => {
    const { id } = req.body;
    const show = await postModel.findByPk(id, {
      include: [{ model: commentModel, include: [userModel] }],
    });
    res.json(show);
  },
  users: async (req, res) => {
    const { id } = req.body;
    const show = await postModel.findByPk(id, {
      include: [userModel],
    });
    res.json(show);
  },
  getall: async (req, res) => {
    try {
      const post1 = await postModel.findAll();
      return res.status(201).json({ message: "get all posts", post1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  getone: async (req, res) => {
    try {
      const { id } = req.body;
      const post2 = await postModel.findOne({
        where: { id },
      });
      if (!post2) {
        return res.status(201).json({ message: "post not found", post2 });
        //   } else {
        //     return res.status(201).json({ message: "post found", post2 });
      }
      res.json(post2);
    } catch (err) {
      res.status(201).json({ message: "somrthing wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.body;
      const post = await postModel.findOne({ where: { id } });
      if (!post) {
        return res.status(201).json({ message: "post not found" });
      }
      await post.destroy();
      return res.json({ message: "deleted sucessfull" });
    } catch (err) {
      console.log("something bad");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.body;
      const { postType } = req.body;
      const post = await postModel.findOne({ where: { id } });
      if (!post) {
        return res.status(201).json({ message: "post not found" });
      }
      post.postType = postType;
      await post.save();
      return res.json({ message: "update sucessfull", post });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default postController;
