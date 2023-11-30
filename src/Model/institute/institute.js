import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import coursemodel from "./course.js";

const institutemodel = sequelize.define("institute", {
  instituteName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  courses: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
institutemodel.hasMany(coursemodel);
coursemodel.belongsTo(institutemodel);
export default institutemodel;
