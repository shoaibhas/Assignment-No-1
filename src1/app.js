import "dotenv/config.js";
import express from "express";
import sequelizes, { connectDB } from "./db/config.js";
import initDB from "./db/init.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import allRouterss from "./router/index.js";
import AuthenticateMiddleware from "./middleware/authentication.js";
const Port1 = process.env.PORT;
const app = express();
connectDB();
const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelizes,
});

app.use(
  Session({
    secret: "fddd",
    store: mySequelizeStore1,
    // expires:new Date(Date.now() + (30 * 86400 * 1000)),
    saveUninitialized: false,
    resave: true, // we support the touch method so per the express-session docs this should be set to false
    proxy: false, // if you do SSL outside of node.
  })
);
mySequelizeStore1.sync();
initDB()
  .then(() => console.log("DB synced"))
  .catch((err) => console.log("DB not synced", err));
app.use(express.json());
app.use("/", allRouterss);
app.post("/", AuthenticateMiddleware, (req, res) => {
  return res.json({
    message: "Hello world1",
  });
});
app.listen(Port1, (err) => {
  if (err) {
    console.log("server not listening");
  } else {
    console.log(`server listening at http://localhost:${Port1}`);
  }
});
