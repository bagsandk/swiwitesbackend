const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const menuRouter = require("./routers/menu");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.log(req.headers);
  res.json("hay");
});

//router
app.use("/menu", menuRouter);

app.listen(5000, () => console.log("Running on port 5000"));
