import followerModel from "../../model/follower/follower.js";

const followerController = {
  create: async (req, res) => {
    try {
      const { followerName } = req.body;
      const follower1 = await followerModel.create({
        followerName,
      });
      return res.status(201).json({ message: "follower created", follower1 });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },

  // sample: async (req, res) => {
  //   const show = await followerModels.findByPk(4, {
  //     include: [userModel],
  //   });
  //   res.json(show);
  // },
  getall: async (req, res) => {
    try {
      const follower1 = await followerModel.findAll();
      return res.status(201).json({ message: "get all followers", follower1 });
    } catch (err) {
      return res.status(201).json({ message: "something wrong" });
    }
  },
  getone: async (req, res) => {
    try {
      const { id } = req.params;
      const follower2 = await followerModel.findOne({
        where: { id },
      });
      if (!follower2) {
        return res
          .status(201)
          .json({ message: "follower not found", follower2 });
        //   } else {
        //     return res.status(201).json({ message: "follower found", follower2 });
      }
      res.json(follower2);
    } catch (err) {
      res.status(201).json({ message: "somrthing wrong" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const follower = await followerModel.findOne({ where: { id } });
      if (!follower) {
        return res.status(201).json({ message: "follower not found" });
      }
      await follower.destroy();
      return res.json({ message: "deleted sucessfull" });
    } catch (err) {
      console.log("something bad");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { followerName } = req.body;
      const follower = await followerModel.findOne({ where: { id } });
      if (!follower) {
        return res.status(201).json({ message: "follower not found" });
      }
      follower.followerName = followerName;
      await follower.save();
      return res.json({ message: "update sucessfull", follower });
    } catch (err) {
      console.log("something bad");
    }
  },
};
export default followerController;
