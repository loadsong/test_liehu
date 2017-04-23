var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  //res.render('index', { title: 'Express' });
});
router.get('/author', function(req, res, next) {
  res.render('author');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
