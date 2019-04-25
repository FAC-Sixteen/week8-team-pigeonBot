const express = require('express');
// const queries = require('../model/queries/index.js'); // getData + postEditor queries

const getUsers = require('../model/queries/getUsers');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    userDetails: getUsers
  })
});

module.exports = router;
