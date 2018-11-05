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
router.post('/login',login.login);

router.post('/register',signup.formprocess);

// router.post('/register',function(req, res){
//   console.log(req.body.nam);
// });

module.exports = router;
