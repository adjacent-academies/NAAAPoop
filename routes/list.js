var express = require('express');
var router = express.Router();

/* GET home page. */

const SFBathroomFinder = require("../public/SFBathroomFinder.json");
const locations = SFBathroomFinder.features
// const sortFunction = require("../public/js/index.js");


router.get('/', function(req, res, next) {
  res.render('list', { title: 'Check out these toilets', locations });
  //res.render('list', { title: 'Now thats what i call toilets', toiletList})
});

router.get('/sort/:sortKey', function(req, res, next) {
  let sorter = req.params.sortKey
  switch (sorter) {
    case 'rating':
      locations.sort((locA, locB) => locA.rating - locB.rating)
      break;

  
    default:
      res.status(500).send(`invalid sorter [${sorter}]`)
      break;
  }

  res.render('list', { title: 'Check out these toilets', locations });
  //res.render('list', { title: 'Now thats what i call toilets', toiletList})
});

module.exports = router;
