const dbConnection = require("../db_connection.js");

const getUsers = (editor_id) => {
  dbConnection.query(
    "SELECT * FROM users INNER JOIN editors ON users.editors_id = editors.id WHERE editors.id = $1",
    [editor_id],
    (err, res) => {
      if (err) {
        return err;
      }
      else {
      console.log(res.rows[0]);
      return res.rows[0];
    }
    }
  );
};

// above function SELECTS * rows FROM users WHERE the editor.id = the first argument passed into getData

module.exports = getUsers;
