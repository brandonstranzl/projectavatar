var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function printHTML (html) {
  console.log(html);
}

// function getHTML (options) {
function getHTML (options, callback) {
  var buffer = ' '

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
    buffer += data;
    });

    response.on('end', function () {
    callback('here is your buffered data ' + buffer);
    });
  });
}

getHTML(requestOptions, printHTML);

  /* Add your code here */

