const express = require("express");
const router = express.Router();

const channelRouter = require("./channel");
const userRouter = require("./user");
const kukiRouter = require("./kuki");

router.get("/", (req, res) => {
  res.send("Hello API!");
});

router.use("/channel", channelRouter);
// router.use("/user", userRouter);
// router.use("/kuki", kukiRouter);

module.exports = router;
