const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", async (req, res) => {
  const resData = await db.connectDB(db.DB_ACTIONS.user.SELECT_ALL_USER, {});

  // json
  const json = await JSON.stringify(resData);

  res.send(json);
});

router.get("/:id", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.user.SELECT_USER_BY_ID,
    req.params
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

// get all users by channelId
router.get("/:channelId/users", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.user.SELECT_ALL_USER_BY_CHANNEL_ID,
    req.params
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const resData = await db.connectDB(db.DB_ACTIONS.user.INSERT_USER, {
    ...req.body,
    channel_id: 1,
  });

  const json = await JSON.stringify(resData);

  res.send(json);
});

module.exports = router;
