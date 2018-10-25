'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var axios = require('axios');



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


  //   request({
  //     headers: {
  //         'x-api-key':'gQywpIf8cE7hrzTAouTNV1rcDAp97ADC20S1lAGi'
  //     },
  //     uri: 'https://api.intellizence.com/api/v1/companies?name=micro',
  //     method: 'GET'
  // }, function (err, res, body) {
  //     if(err) {
  //         console.log('err ' + err);
  //     } else {
  //         // Do something for response
  //         console.log('response =>' + JSON.stringify(body));
  //     }
  // });
  
  // var instance = axios.create({
  //   baseURL: 'https://api.intellizence.com/api/v1/companies?name=block',
  //   timeout: 1000,
  //   headers: {'x-api-key': 'gQywpIf8cE7hrzTAouTNV1rcDAp97ADC20S1lAGi'}
  // });
  
  // instance.get().then((newsFeed) => {
  //   console.log((newsFeed.data));
  //   // console.log(newsFeed.status);
  //   // console.log(newsFeed.statusText);
  //   // console.log(newsFeed.headers);
  //   // console.log(newsFeed.config);
  // }).catch((err) => {
  //   console.log(err)
  // });

  // axios.all([
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03'),
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
  // ]).then(axios.spread((response1, response2) => {
  //   console.log(response1.data.url);
  //   console.log(response2.data.url);
  // })).catch(error => {
  //   console.log(error);
  // });
  

  // axios.get('/user/12345')
  // .then(function(response) {
  //   console.log(response.data);
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
  // });




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


//Function to check memory leaks on the server
var logMemory = function() {
  var util = require('util');
  console.log(util.inspect(process.memoryUsage()));
  setTimeout(logMemory, 60000);
};
//Uncomment this to log memory usage, check for heap size changes over time
// logMemory();
