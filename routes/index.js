var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bathroom Mapper' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Bathroom Mapper' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Bathroom Mapper' });
});


module.exports = router;
