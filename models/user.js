var mongoose = require('mongoose');

//user schema
var UserSchema = new mongoose.Schema({
    username:{
        type: String,
        index: true
    },
    password1:{
        type: String
    },
    email:{
        type: String
    },
    name:{
        type: String
    },
});

var User = module.exports = mongoose.model('User', UserSchema);
module.exports.createUser = function(newUser, callback){
    newUser.save(callback);
};

// module.exports = mongoose.model('User', UserSchema);