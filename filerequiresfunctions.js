var https = require('https');
// better to require this here or in the http-functions.js page??

var getHTML = require('./callbacks/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
