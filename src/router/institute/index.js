import { Router } from "express";
import InstituteController from "../../controller/institute/index.js";

const instituteRouter = Router();
// instituteRouter.get("/alluser", InstituteController.alluser);
instituteRouter.post("/create", InstituteController.create);
// instituteRouter.get("/all", InstituteController.getall);
// instituteRouter.get("/:id", InstituteController.getone);
// instituteRouter.delete("/:id", InstituteController.delete);
// instituteRouter.put("/:id", InstituteController.update);
// instituteRouter.get("/search", InstituteController.search);

// instituteRouter.get("/update", InstituteController.update);
// instituteRouter.get("/delete", InstituteController.delete);

export default instituteRouter;
