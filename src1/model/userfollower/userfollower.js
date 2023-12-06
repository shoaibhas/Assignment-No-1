import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/user.js";
import followerModel from "../follower/follower.js";
import UserLoginModel from "../userlogin/user.js";
const userFollowerModel = sequelize.define("userfollower", {
  userId: {
    type: DataTypes.STRING,
    references: {
      model: userModel,
      key: "id",
    },
  },
  followerId: {
    type: DataTypes.STRING,
    references: {
      model: followerModel,
      key: "id",
    },
  },
});

UserLoginModel.belongsToMany(followerModel, { through: userFollowerModel });
followerModel.belongsToMany(UserLoginModel, { through: userFollowerModel });
export default userFollowerModel;
