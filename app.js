require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const conn = await connectDB();

  conn.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  conn.end((err) => {
    if (err) throw err;
    console.log("Closed!");
  });
});
