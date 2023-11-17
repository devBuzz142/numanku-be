const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", async (req, res) => {
  const resData = await db.connectDB(db.DB_ACTIONS.kuki.SELECT_ALL_KUKI, {});

  // json
  const json = await JSON.stringify(resData);

  res.send(json);
});

router.get("/:id", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.kuki.SELECT_KUKI_BY_ID,
    req.params
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

// get all kukies by channelId
router.get("/:channelId/kukies", async (req, res) => {
  const resData = await db.connectDB(
    db.DB_ACTIONS.kuki.SELCECT_ALL_KUKI_BY_CHANNEL_ID,
    { channel_id: req.params.channelId }
  );

  const json = await JSON.stringify(resData);

  res.send(json);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const resData = await db.connectDB(db.DB_ACTIONS.kuki.INSERT_KUKI, req.body);

  const json = await JSON.stringify(resData);

  res.send(json);
});

module.exports = router;
