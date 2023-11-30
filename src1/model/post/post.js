import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
import likeModel from "../like/like.js";
import userModel from "../user/user.js";

import commentModel from "../comments/comment.js";
import followerModel from "../follower/follower.js";
const postModel = sequelizes.define("posts", {
  postType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
postModel.hasMany(likeModel);
likeModel.belongsTo(postModel);
postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
userModel.hasOne(likeModel);

likeModel.belongsTo(userModel);

userModel.hasMany(postModel);
postModel.belongsTo(userModel);
// followerModel.hasMany(postModel);
// postModel.belongsTo(followerModel);
export default postModel;
