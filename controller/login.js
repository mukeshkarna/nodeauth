exports.showform =(req, res, next)=> {
    res.render('login',{
      'title': 'Login'
    });
};

exports.login=(req,res,next)=>{
  console.log(req.bodyParser.username);
  res.render("dashboard.ejs",{email:req.bodyParser.username})
  // if(req.bodyParser.email && req.bodyParser.password)
}