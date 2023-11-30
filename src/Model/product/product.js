import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const productmodel = sequelize.define("products", {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiryDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default productmodel;
