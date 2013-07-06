var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
 //var buffer = fs.readFileSync('index.html');
 //response.send(buffer.toString('utf8');
 
 fs.readFileSync('index.html', 'utf8', function(err,data){
  if(err) throw err;
   var buffer2 = data;
 });

response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

