const app  = require('express')();
const cors = require('cors');
const fs   = require('fs');
const birl = require('./code_exec.js');

var corsOptions = {
  origin: 'https://birl-language.github.io'
};

// Permitindo CORS
app.use(cors(corsOptions));

app.get ('/', function (req, res) {
  console.log ('GET AT \'/\'');
  res.send ('HELLO');
});

app.post('/compile', cors (corsOptions), function (req, res) {
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

app.options('/compile', cors(corsOptions));

var port = process.env.PORT || 3000;
app.listen (port);
console.log ('Listening at http://localhost:' + port);