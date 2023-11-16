require("dotenv").config();

const express = require("express");
const db = require("./db");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const res = await db.connectDB(db.DB_ACTIONS.channel.SELECT_ALL_CHANNEL, {});

  console.log(res);
});
