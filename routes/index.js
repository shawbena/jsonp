var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/jsonptest', (req, res, next) => {
  res.jsonp({ user: 'tobi', msg: 'hh' });
});
module.exports = router;
