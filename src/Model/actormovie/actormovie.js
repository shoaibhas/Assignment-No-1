import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import actormodel from "./actor.js";
import moviemodel from "./movie.js";
const actormoviemodel = sequelize.define("actormovie", {
  actorId: {
    type: DataTypes.STRING,
    references: {
      model: actormodel,
      key: "id",
    },
  },
  movieId: {
    type: DataTypes.STRING,
    references: {
      model: moviemodel,
      key: "id",
    },
  },
});

actormodel.belongsToMany(moviemodel, { through: actormoviemodel });
moviemodel.belongsToMany(actormodel, { through: actormoviemodel });
export default actormoviemodel;
