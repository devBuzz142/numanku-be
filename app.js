require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const apiRouter = require("./api/index");

const app = express();

app.use(cors());

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRouter);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  //   const res = await db.connectDB(db.DB_ACTIONS.channel.SELECT_ALL_CHANNEL, {});
});
