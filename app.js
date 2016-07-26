/*const https = require('https');
const fs = require('fs');
const birl = require('./code_exec.js');

var options = { 
    key:  fs.readFileSync('server.key'), 
    cert: fs.readFileSync('server.crt')
}; 

const server = https.createServer(options, function(req, res) {
    console.log ("req");
   if (req.url == "/compile" && req.method == 'POST') {
      console.log("POST");

      // Lendo o JSON
      var body = '';
      req.on('data', function (data) {
         body += data;
      });

      // Enviando o código e o stdin para a execução do código
      req.on('end', function () {
         var json = JSON.parse(body);
         birl(json.code, json.stdin, res);
     });
   }
   else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
   }
});

var port = process.env.PORT || 8080;
server.listen(port);
console.log('Listening at https://localhost:' + port);*/

var http = require('http');
var express = require("express");

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger());

app.get('/', function(request, response) {
  console.log('[support dash] processing get request')
  response.send('Hello World 2!');
});

app.listen(process.env.PORT, function () {
  console.log('***** exp listening on port: ' + process.env.PORT);
});