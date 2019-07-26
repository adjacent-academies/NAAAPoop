var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FECAL FINDER' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'FECAL FINDER' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'FECAL FINDER' });
});


module.exports = router;
