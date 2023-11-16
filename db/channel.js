// channel table
// id int
// name string
// password string
// info string
// posterImage image
// link string
// outterImage0 image
// outterImage1 image
// outterImage2 image
// innerImage0 image
// innerImage1 image
// innerImage2 image
const CREATE_TABLE_CHANNEL = () => `CREATE TABLE IF NOT EXISTS channel (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    info VARCHAR(255) NOT NULL,
    posterImage longblob NOT NULL,
    link VARCHAR(255) NOT NULL,
    outterImage0 longblob NOT NULL,
    outterImage1 longblob NOT NULL,
    outterImage2 longblob NOT NULL,
    innerImage0 longblob NOT NULL,
    innerImage1 longblob NOT NULL,
    innerImage2 longblob NOT NULL,
    PRIMARY KEY (id)
    )`;

const INSERT_CHANNEL = ({
  name,
  password,
  info,
  posterImage,
  link,
  outterImage0,
  outterImage1,
  outterImage2,
  innerImage0,
  innerImage1,
  innerImage2,
}) => {
  return `INSERT INTO channel (name, password, info, posterImage, link, outterImage0, outterImage1, outterImage2, innerImage0, innerImage1, innerImage2) VALUES ('${name}', '${password}', '${info}', '${posterImage}', '${link}', '${outterImage0}', '${outterImage1}', '${outterImage2}', '${innerImage0}', '${innerImage1}', '${innerImage2}')`;
};

const SELECT_CHANNEL = ({ id }) => {
  return `SELECT * FROM channel WHERE id = ${id}`;
};

const SELECT_ALL_CHANNEL = () => {
  return `SELECT * FROM channel`;
};

module.exports = {
  CREATE_TABLE_CHANNEL,
  INSERT_CHANNEL,
  SELECT_CHANNEL,
  SELECT_ALL_CHANNEL,
};
