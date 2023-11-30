import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
// import postModel from "../post/post.js";
const userModel = sequelizes.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// userModel.hasOne(likeModel)
// likeModel.belongsTo(userModel)
// userModel.hasMany(commentModel);
// commentModel.belongsTo(userModel);
export default userModel;
