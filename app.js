const app = require('express')();
const fs = require('fs');
const birl = require('./code_exec.js');

// Permitindo CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get ('/', function (req, res) {
  console.log ('GET AT \'/\'');
  res.send ('HELLO');
});

app.post('/compile', function (req, res) {
  console.log ('POST AT \'/compile\'');

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
});

app.options('/compile', function (req, res) {
  console.log ('OPTIONS AT \'/compile\'');

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
});

var port = process.env.PORT || 3000;
app.listen (port);
console.log ('Listening at https://localhost:' + port);