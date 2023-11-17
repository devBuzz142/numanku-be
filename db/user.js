// user table
// id int
// name string
// password string
// isMaker boolean
// channel_id int
const CREATE_TABLE_USER = () => `CREATE TABLE IF NOT EXISTS user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isMaker BOOLEAN NOT NULL,
    channel_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (channel_id) REFERENCES channel(id)
    )`;

const INSERT_USER = ({ name, password, isMaker, channel_id }) => {
  return `INSERT INTO user (name, password, isMaker, channel_id) VALUES ('${name}', '${password}', ${isMaker}, '${channel_id}')`;
};

const SELECT_ALL_USER = () => {
  return `SELECT * FROM user`;
};

const SELECT_USER = (id) => {
  return `SELECT * FROM user WHERE id = ${id}`;
};

const SELECT_ALL_USER_BY_CHANNEL_ID = ({ channel_id }) => {
  return `SELECT * FROM user WHERE channel_id = ${channel_id}`;
};

module.exports = {
  CREATE_TABLE_USER,
  INSERT_USER,
  SELECT_ALL_USER,
  SELECT_USER,
  SELECT_ALL_USER_BY_CHANNEL_ID,
};
