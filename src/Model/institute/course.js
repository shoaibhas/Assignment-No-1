import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const coursemodel = sequelize.define("couse", {
  courseName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coursesCredit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
export default coursemodel;
