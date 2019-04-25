const express = require("express");
//const queries = require("../model/queries/index.js"); // getData + postEditor queries
const querystring = require("query-string");
const getUsers = require("../model/queries/getUsers");
const postEditor = require("../model/queries/postEditor");
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

// (req, res) => {
//   let allTheData = "";
//   req.on("data", chunk => {
//     allTheData += chunk;
//   });
//   req.on("end", () => {
//     const userData = querystring.parse(allTheData);
//     console.log(userData);
//   });
//   res.render("home", {
//     userDetails: getUsers
//   });
// });

module.exports = router;
