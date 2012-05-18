// Load an encryptor

try {
  Auth.Encryptor.current = new Auth.Encryptor.Bcrypt;
} catch(e) {
  Auth.Encryptor.current = new Auth.Encryptor.Plain;
}
