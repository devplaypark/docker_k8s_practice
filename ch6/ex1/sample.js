var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end(); //end the response
}).listen(8080);

