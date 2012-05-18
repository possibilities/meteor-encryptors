Auth.Encryptor.Plain = function() {
  this.name = 'plain';
};
_.extend(Auth.Encryptor.Plain.prototype, Auth.Encryptor.Base.prototype);
  
Auth.Encryptor.Plain.prototype.passwordHash = function(password) {
  return password;
};

Auth.Encryptor.Plain.prototype.passwordMatchesHash = function(password, hash) {
  return password === hash;
};
