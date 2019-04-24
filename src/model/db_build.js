const fs = require('fs');
const path = require('path');

const dbConnection = require('./db_connection.js');
let sqlPath = path.join(__dirname, 'db_build.sql');

if (process.env.node_env == "test") {
  sqlPath = path.join(__dirname, "db_test_build.sql");
}

const sql = fs.readFileSync(sqlpath).toString();

const runDbBuild = cb => dbConnection.query(sql, cb);

module.exports = runDbBuild;
