import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
import postModel from "../post/post.js";
const followerModel = sequelizes.define("follower", {
  followerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
// followerModel.hasMany(postModel);
// postModel.belongsTo(followerModel);
export default followerModel;
