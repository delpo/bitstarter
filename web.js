var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
  response.send('Hola ni�a');
});

var port = Process.Env.Port || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
