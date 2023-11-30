import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import personmodel from "./person.js";
const cnicmodel = sequelize.define("cnic1", {
  cnicNo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
cnicmodel.hasOne(personmodel);
personmodel.belongsTo(cnicmodel);
export default cnicmodel;
