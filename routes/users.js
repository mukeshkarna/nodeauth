var express = require('express');
var router = express.Router();
var signup =  require('../controller/signup');
var login =  require('../controller/login');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', signup.showform);

router.get('/login', login.showform);

router.post('/register',signup.formprocess);

module.exports = router;
