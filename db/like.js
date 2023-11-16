// like table
// id int
// kuki_id int
// user_id int

const CREATE_TABLE_LIKE = `CREATE TABLE IF NOT EXISTS like (
    id INT(11) NOT NULL AUTO_INCREMENT,
    kuki_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (kuki_id) REFERENCES kuki(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
    )`;

module.exports = {
  CREATE_TABLE_LIKE,
};
