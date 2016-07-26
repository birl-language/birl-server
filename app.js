const https = require('https');
const fs = require('fs');
const birl = require('./code_exec.js');

var options = { 
    key:  fs.readFileSync('server.key'), 
    cert: fs.readFileSync('server.crt')
}; 

const server = https.createServer(options, function(req, res) {
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

port = 4433;
host = '127.0.0.1'; 
server.listen(port, host);
console.log('Listening at https://' + host + ':' + port);