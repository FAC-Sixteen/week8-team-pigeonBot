const fs = require('fs');
const path = require('path');

const dbConnection = require('./db_connection.js');
let sqlPath = path.join(__dirname, 'db_build.sql');

if (process.env.NODE_ENV == "test") {
  sqlPath = path.join(__dirname, 'db_test_build.sql');
}

const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => dbConnection.query(sql, (err, res) => {
  if (err) {
    console.log("This is the error: ", err);
  } else {
    console.log("DB is created!");
    dbConnection.end(() => {
      console.log("Connection closed!");
    })
  }
});

runDbBuild();

module.exports = runDbBuild;
