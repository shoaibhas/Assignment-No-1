import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import productmodel from "./product.js";
const unitmodel = sequelize.define("units", {
  unitName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
unitmodel.hasMany(productmodel);
productmodel.belongsTo(unitmodel);
export default unitmodel;
