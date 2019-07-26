var express = require('express');
var router = express.Router();

/* GET home page. */

const SFBathroomFinder = require("../public/SFBathroomFinder.json");
const locations = SFBathroomFinder.features


router.get('/', function(req, res, next) {
  res.render('list', { title: 'List View for the Bathroom Mapper', locations});
});

module.exports = router;
