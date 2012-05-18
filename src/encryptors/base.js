Auth = { Encryptor: {} };

Auth.Encryptor.Base = function () {
  this.name = 'base';
};

Auth.Encryptor.Base.prototype.passwordHash = function(password) {
  throw 'Not implemented: passwordHash';
};

Auth.Encryptor.Base.prototype.passwordMatchesHash = function(password, hash) {
  throw 'Not implemented: passwordMatchesHash';
};

Auth.Encryptor.Base.prototype.load = function() {
  throw 'Not implemented: load';
};

Auth.Encryptor.Base.prototype.authenticateUser = function(email, password) {
  var user;
  if (email && password) {
    user = Users.findOne({ email: email });
  }
  if (user && this.passwordMatchesHash(password, user.passwordDigest)) {
    return user;
  }  
};
