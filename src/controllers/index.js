const express = require("express");
//const queries = require("../model/queries/index.js"); // getData + postEditor queries
const getUsers = require("../model/queries/getUsers");
const postEditor = require("../model/queries/postEditor");
const error = require('./error');

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    userDetails: getUsers
  });
});

router.post("/post-form", (req, res) => {
  console.log(req.body);
  res.render("home", {
    userDetails: getUsers
  });
});

router.use(error.client);
router.use(error.server);

module.exports = router;
