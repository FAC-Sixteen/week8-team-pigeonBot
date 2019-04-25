const dbConnection = require('./db_connection');

const getUsers = (editor_id, cb) => {
    dbConnection.query("SELECT * FROM users INNER JOIN editors ON users.editors_id = editors.id WHERE editors.id = $1",
    [editor_id], (err, res) => {
        if (err) {
            return cb(err);
        }
        cb(null, res.rows);
    })
}

// above function SELECTS * rows FROM users WHERE the editor.id = the first argument passed into getData




module.exports = getUsers;

