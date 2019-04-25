const queries = require('../model/queries/index.js'); // getData + postEditor queries

const getData = require('../model/queries/getData');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    editors: getData
  })
});

module.exports = router;
