// kuki table
// id int
// content string
// channel_id int
// writer_id int
// outterImageIndex number
// innerImageIndex number
// isPrivate boolean
// isAnonymous boolean
// left number
// likeCount number
const CREATE_TABLE_KUKI = () => `CREATE TABLE IF NOT EXISTS kuki (
    id INT(11) NOT NULL AUTO_INCREMENT,
    content VARCHAR(255) NOT NULL DEFAULT '',
    channel_id INT(11) NOT NULL,
    writer_id INT(11) NOT NULL,
    outterImageIndex INT(11) NOT NULL DEFAULT 0,
    innerImageIndex INT(11) NOT NULL DEFAULT 0,
    isPrivate BOOLEAN NOT NULL DEFAULT false,
    isAnonymous BOOLEAN NOT NULL DEFAULT false,
    x INT(11) NOT NULL DEFAULT 0,
    likeCount INT(11) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (channel_id) REFERENCES channel(id),
    FOREIGN KEY (writer_id) REFERENCES user(id)
    )`;

const INSERT_KUKI = ({
  content,
  channel_id,
  writer_id,
  outterImageIndex,
  innerImageIndex,
  isPrivate,
  isAnonymous,
  x,
  likeCount,
}) => {
  return `INSERT INTO kuki (content, channel_id, writer_id, outterImageIndex, innerImageIndex, isPrivate, isAnonymous, x, likeCount) VALUES ('${content}', '${channel_id}', '${writer_id}', '${outterImageIndex}', '${innerImageIndex}', '${isPrivate}', '${isAnonymous}', '${x}', '${likeCount}')`;
};

const SELECT_ALL_KUKI = () => {
  return `SELECT * FROM kuki`;
};

const SELECT_KUKI = (id) => {
  return `SELECT * FROM kuki WHERE id = ${id}`;
};

module.exports = {
  CREATE_TABLE_KUKI,
  INSERT_KUKI,
  SELECT_ALL_KUKI,
};
