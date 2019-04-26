const dbConnection = require("../db_connection.js");
const fs = require('fs');

const getUsers = (editor_id) => {
  return new Promise((resolve, reject) => {

    dbConnection.query(
      "SELECT * FROM users INNER JOIN editors ON users.editors_id = editors.id WHERE editors.id = $1",
      [editor_id],
      (err, res) => {
        if (err) {
          reject(err)
        }
        else {
          // fs.writeFile(__dirname + "/../users.json", res.rows[0], function(error) {
          //     if (error) {
          //       console.log("Error");
          //       return;
          //   }
          //   console.log(res.rows[0])
          //   console.log("Successfully written to file");
          // });
          // console.log(res.rows);
        resolve(res.rows)
      }
      }
    );
  })

  console.log("BOO", result);
  // return result;
};

// above function SELECTS * rows FROM users WHERE the editor.id = the first argument passed into getData

module.exports = getUsers;
