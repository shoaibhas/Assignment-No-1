import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const actormodel = sequelize.define("actors", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
export default actormodel;
