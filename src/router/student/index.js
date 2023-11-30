import { Router } from "express";
import StudentController from "../../controller/student/index.js";

const studentRouter = Router();
// studentRouter.get("/alluser", StudentController.alluser);
studentRouter.post("/create", StudentController.create);
studentRouter.get("/all", StudentController.getall);
studentRouter.get("/:id", StudentController.getone);
studentRouter.get("/", StudentController.search);
studentRouter.delete("/:id", StudentController.delete);
studentRouter.put("/:id", StudentController.update);
// studentRouter.get("/search", StudentController.search);

// studentRouter.get("/update", StudentController.update);
// studentRouter.get("/delete", StudentController.delete);

export default studentRouter;
