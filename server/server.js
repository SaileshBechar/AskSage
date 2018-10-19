'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var http = require('http');
var https = require('https');
var sslConfig = require('./ssl-config');


var app = module.exports = loopback();

// boot scripts mount components like REST API
boot(app, __dirname);

app.start = function(httpOnly) {
  if (httpOnly === undefined) {
    httpOnly = process.env.HTTP;
  }
  var server = null;
  if (!httpOnly) {
    var options = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate,
    };
    server = https.createServer(options, app);
  } else {
    server = http.createServer(app);
  }
  server.listen(app.get('port'), function() {
    var baseUrl = (httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
    app.emit('started', baseUrl);
    // console.log('LoopBack server listening @ %s%s', baseUrl, '/');
    console.log('Server started - '+ Date.now());
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      // console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
  return server;
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}




// app.start = function() {

//   // start the web server
//   return app.listen(function() {
//     app.emit('started');
//     var baseUrl = app.get('url').replace(/\/$/, '');
//     // console.log('Web server listening at: %s', baseUrl);
//     console.log('Server started - '+ Date.now())
//     if (app.get('loopback-component-explorer')) {
//       var explorerPath = app.get('loopback-component-explorer').mountPath;
//       // console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
//     }
//   });
// };

// // Bootstrap the application, configure models, datasources and middleware.
// // Sub-apps like REST API are mounted via boot scripts.
// boot(app, __dirname, function(err) {
//   if (err) //res.sendFile(path.join(__dirname + '/client/v2/asksage/dist/index.html')); 
//     throw err;

//   // start the server if `$ node server.js`
//   if (require.main === module)
//     app.start();
// });


//Function to check memory leaks on the server
var logMemory = function() {
  var util = require('util');
  console.log(util.inspect(process.memoryUsage()));
  setTimeout(logMemory, 60000);
};
//Uncomment this to log memory usage, check for heap size changes over time
// logMemory();
