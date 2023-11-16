require("dotenv").config();

const mariadb = require("mysql");

const connectDB = async () => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  return conn;
};

module.exports = connectDB;
