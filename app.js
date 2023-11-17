require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const apiRouter = require("./api/index");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRouter);

app.listen(port, async () => {
  // let resData = await db.connectDB(
  //   db.DB_ACTIONS.channel.SELECT_ALL_CHANNEL,
  //   {}
  // );

  // // print as object
  // const channelId = resData[0].id;
  // console.log(channelId);

  // resData = await db.connectDB(db.DB_ACTIONS.user.INSERT_USER, {
  //   channel_id: channelId,
  //   name: "test user",
  //   password: "test",
  //   isMaker: false,
  // });

  // console.log(resData);

  // resData = await db.connectDB(
  //   db.DB_ACTIONS.user.SELECT_ALL_USER_BY_CHANNEL_ID,
  //   {
  //     channel_id: channelId,
  //   }
  // );

  // const userId = resData[0].id;
  // console.log("userId : ", userId);

  // resData = await db.connectDB(db.DB_ACTIONS.kuki.INSERT_KUKI, {
  //   writer_id: userId,
  //   channel_id: channelId,
  //   content: "test kuki",
  //   outterImageIndex: 0,
  //   innerImageIndex: 0,
  //   isPrivate: false,
  //   isAnonymous: false,
  //   x: 0,
  //   likeCount: 0,
  // });

  // console.log(resData);

  console.log(`Example app listening at http://localhost:${port}`);
});
