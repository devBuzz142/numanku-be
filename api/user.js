const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.channel.SELECT_ALL_CHANNEL,
    {}
  );

  // json
  const json = await JSON.stringify(resData);

  res.send(json);
});

router.get("/:id", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.channel.SELECT_CHANNEL,
    req.params
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

router.post("/", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.channel.INSERT_CHANNEL,
    req.body
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

module.exports = router;
