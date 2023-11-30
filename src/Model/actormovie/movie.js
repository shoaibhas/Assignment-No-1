import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const moviemodel = sequelize.define("movie", {
  movieName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  movieType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
export default moviemodel;
