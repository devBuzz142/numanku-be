require("dotenv").config();

const channel = require("./channel");
const user = require("./user");
const kuki = require("./kuki");

const mariadb = require("mysql");

const connectDB = async () => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });

  conn.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  conn.query("use numanku", (err, result) => {
    if (err) throw err;
    console.log("Database numanku selected");
    console.log(result);
  });

  conn.query(channel.SELECT_ALL_CHANNEL(), (err, result) => {
    if (err) throw err;
    console.log("Table channel selected");
    console.log(result);
  });

  conn.end((err) => {
    if (err) throw err;
    console.log("Closed!");
  });
};

connectDB();
// module.exports = connectDB;
