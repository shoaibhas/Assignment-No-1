import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const personmodel = sequelize.define("person1", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default personmodel;
