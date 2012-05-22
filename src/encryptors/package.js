Package.describe({
  summary: "A smart package of server-side encryption strategies"
});

Package.on_use(function (api) {
  // Encryptors
  api.add_files('base.js', 'server');  
  api.add_files('bcrypt.js', 'server');  
  api.add_files('plain.js', 'server');  
  // Scripts
  api.add_files('server.js', 'server');  
});
