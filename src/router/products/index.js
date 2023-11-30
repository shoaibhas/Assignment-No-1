import { Router } from "express";
import ProductController from "../../controller/product/index.js";
import productValidator from "../../validator/product/index.js";

const productRouter = Router();
// productRouter.get("/alluser", ProductController.alluser);
productRouter.post(
  "/create",
  productValidator.create,
  ProductController.create
);
productRouter.get("/all", ProductController.getall);
productRouter.get("/:id", ProductController.getone);
productRouter.delete("/:id", ProductController.delete);
productRouter.put("/:id", ProductController.update);
// productRouter.get("/search", ProductController.search);
// productRouter.get("/update", ProductController.update);
// productRouter.get("/delete", ProductController.delete);

export default productRouter;
