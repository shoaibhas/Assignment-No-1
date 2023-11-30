import actormodel from "../../Model/actormovie/actor.js";
import actormoviemodel from "../../Model/actormovie/actormovie.js";
import moviemodel from "../../Model/actormovie/movie.js";

const ActorMovieController = {
  create: async (req, res) => {
    // await actormodel.create({
    //   firstName: "abbas",
    //   lastName: "ahmad",
    //   role: "villan",
    //   contact: "03209098543",
    // });

    // await moviemodel.create({
    //   movieName: "force2",
    //   movieType: "action2",
    //   country: "ind",
    //   //contact: "03209098543",
    // });
    // await moviemodel.create({
    //   movieName: "force3",
    //   movieType: "action3",
    //   country: "pak",
    //   //contact: "03209098543",
    // });

    // await actormoviemodel.create({
    //   actorId: "1",
    //   movieId: "1",
    // });
    // await actormoviemodel.create({
    //   actorId: "1",
    //   movieId: "4",
    // });
    // await actormoviemodel.create({
    //   actorId: "2",
    //   movieId: "2",
    // });
    // await actormoviemodel.create({
    //   actorId: "2",
    //   movieId: "3",
    // });
    // await actormoviemodel.create({
    //   actorId: "2",
    //   movieId: "4",
    // });
    // const data = await actormodel.findAll({ include: [moviemodel] });
    const data1 = await moviemodel.findByPk(2, {
      include: [actormodel],
      // include: [{ model: actormodel, attributes: ["firstName", "lastName"] }],
    });

    res.json({ message: "data created", data1 });
  },
};
export default ActorMovieController;
