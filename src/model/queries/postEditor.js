const dbConnection = require("../db_connection");

exports.post = (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const fac_cohort = req.body.fac_cohort;
  const editor = req.body.editor;
  const comment = req.body.comment;

  dbConnection.query(
    "INSERT INTO users (first_name, last_name, fac_cohort, editors_id, comment) VALUES ($1, $2, $3, (SELECT id FROM editors WHERE name = $4), $5)",
    [first_name, last_name, fac_cohort, editor, comment],
    (err, result) => {
      if (err) throw new Error(err);

      console.log("inserted into users table :)");
      res.redirect("/");
    }
  );
  // console.log(req.body);
};
