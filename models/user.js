var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodeauth',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;

//user schema
var UserSchema = mongoose.Schema({
    username:{
        type: String,
        index: true
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    name:{
        type: String
    },
    profileimage:{
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
    newUser.save(callback);
};