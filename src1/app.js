import "dotenv/config.js";
import express from "express";
import { connectDB } from "./db/config.js";
import initDB from "./db/init.js";
const Port1 = process.env.PORT;
console.log("dd", Port1);
import allRouterss from "./router/index.js";
const app = express();
connectDB();
initDB()
  .then(() => console.log("DB synced"))
  .catch((err) => console.log("DB not synced", err));
app.use(express.json());
app.use("/", allRouterss);
app.listen(Port1, (err) => {
  if (err) {
    console.log("server not listening");
  } else {
    console.log(`server listening at http://localhost:${Port1}`);
  }
});
