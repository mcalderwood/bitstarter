var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  /*fs.readFileSync('index.html', 'utf8', function (err, data) {
    if (err) throw err;
    response.send(data.toString("utf8"));
  });*/
  response.send(fs.readFileSync('index.html', 'utf8'));
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
