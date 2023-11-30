import { DataTypes } from "sequelize";
import sequelize from "../../../src1/db/config.js";
const UserLoginModel = sequelize.define("userlogin", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default UserLoginModel;
