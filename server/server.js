'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    // console.log('Web server listening at: %s', baseUrl);
    console.log('Server started - '+ Date.now())
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      // console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) //res.sendFile(path.join(__dirname + '/client/v2/asksage/dist/index.html')); 
    throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

var logMemory = function() {
  var util = require('util');
  console.log(util.inspect(process.memoryUsage()));
  setTimeout(logMemory, 60000);
};

// logMemory();
