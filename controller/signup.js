var User =  require('../models/user');

exports.showform =(req,res)=>{
    res.render("register.ejs",{
      'title': 'Register'
    });
};

exports.formprocess =(req, res) => {
  // var newuser = new User(req.body);
  // newuser.save(function(err, user){
  //   if(user){
  //     res.redirect('/');
  //   }
  // })

  //   console.log(req.body);

  //Get form Values
    var name = req.body.name;
    var email =  req.body.email;
    var username = req.body.username;
    var password1 = req.body.password1;
    var password2 = req.body.password2;

    // //form validation
    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Email is not Valid').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password1', 'Password field is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password1);
  
    // // // check for errors
    var errors = req.validationErrors();

    console.log(errors);
  
    if (errors) {
      res.render('register',{
        errors: errors,
        name: name,
        email: email,
        username: username,
        password1: password1,
        password2: password2
      });
    }else{
      console.log('here');
      var newUser =  new User({
        name: name,
        email: email,
        username: username,
        password1: password1, 
      });
      
      //create user
      User.createUser(newUser, function(err, user){
        if (err) throw err;
        console.log(user);
      });
  
      req.flash('success', 'You are now registered and may log in');
  
      res.location('/');
      res.redirect('/');
    }
  };