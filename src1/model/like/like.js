import { DataTypes } from "sequelize";
import sequelizes from "../../db/config.js";
const likeModel = sequelizes.define("likes", {
  emoji: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default likeModel;
