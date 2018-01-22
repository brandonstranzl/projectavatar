var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

https.get(options, function (response) {

  response.setEncoding('utf8');

  var buffer = []

  response.on('data', function (data) {
    buffer.push(data);
  });

  response.on('end', function() {
    console.log('here is your buffered data ' + buffer);
  });

  });

  }

  getAndPrintHTML(requestOptions);

  /* Add your code here */

