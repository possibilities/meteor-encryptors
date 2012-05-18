Auth.Encryptor.Bcrypt = function() {
  this.name = 'bcrypt';
  this.bcrypt = __meteor_bootstrap__.require('bcrypt');
};
_.extend(Auth.Encryptor.Bcrypt.prototype, Auth.Encryptor.Base.prototype);
  
Auth.Encryptor.Bcrypt.prototype.passwordHash = function(password) {
  var salt = this.bcrypt.genSaltSync(10);
  var hash = this.bcrypt.hashSync(password, salt);

  return hash;
};

Auth.Encryptor.Bcrypt.prototype.passwordMatchesHash = function(password, hash) {
  return this.bcrypt.compareSync(password, hash);
};
