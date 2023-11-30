import { Router } from "express";
import ActorMovieController from "../../controller/actormovie/index.js";

const actorMovieRouter = Router();
actorMovieRouter.post("/", ActorMovieController.create);
export default actorMovieRouter;
