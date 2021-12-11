const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const menuRouter = require("./routers/menu");
const qrRouter = require("./routers/qr");
const userRouter = require("./routers/user");
const pointRouter = require("./routers/point");
const Middleware = require("./middleware");
const { me } = require("./controllers/user");

const app = express();
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.json("hay");
});
app.use("/qr", qrRouter);
app.use(Middleware.verifyToken);
app.use("/point", pointRouter);
app.get("/me", me);
//router
app.use("/user", userRouter);
app.use("/menu", menuRouter);

app.listen(5000, () => console.log("Running on port 5000"));
