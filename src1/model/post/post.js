import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
import likeModel from "../like/like.js";
import userModel from "../user/user.js";

import commentModel from "../comments/comment.js";
import followerModel from "../follower/follower.js";
import UserLoginModel from "../userlogin/user.js";
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
UserLoginModel.hasMany(commentModel);
commentModel.belongsTo(UserLoginModel);
UserLoginModel.hasOne(likeModel);

likeModel.belongsTo(UserLoginModel);

UserLoginModel.hasMany(postModel);
postModel.belongsTo(UserLoginModel);
followerModel.hasMany(postModel);
postModel.belongsTo(followerModel);
export default postModel;
