require("dotenv").config();

const channel = require("./channel");
const user = require("./user");
const kuki = require("./kuki");

const DB_ACTIONS = {
  channel,
  user,
  kuki,
};

const mariadb = require("mysql");

const connectDB = async (query, params) => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });

  return new Promise((resolve, reject) => {
    conn.query(query(params), (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }

      conn.end();
    });
  });
};

module.exports = {
  connectDB,
  DB_ACTIONS,
};
