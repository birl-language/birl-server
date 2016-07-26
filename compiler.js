/**********************************************************************
* 
* compiler.js: compila o arquivo file e executa-o (se o retorno da execução
* for 0, retorna a stdout do arquivo).
*
***********************************************************************/
module.exports = function (file, res) {
  const exec = require('child_process').exec;
  const fs = require('fs');

  // compila com o gcc
  exec('gcc ' + file + '.c -o ' + file + ' && timeout 2s ./' + file + ' < ' + file + '.txt', function (error, stdout, stderr) {
    //se houver erro de compilação, respondemos a requisição com um erro.
    res.setHeader('Content-Type', 'application/json');
    if (error) {
      console.log ("ERROR: " + error);
      res.end(JSON.stringify({  error: "ERRO DE COMPILAÇÃO PAI!\n",
                                stdout: null
                              }));
    }
    else {
      console.log ("STDOUT: " + stdout);
      res.end(JSON.stringify({  error: null,
                                stdout: stdout
                              }));
    }
  })
  .on('close', function () {
    exec('rm ' + file + '*', function (error, stdout, stderr) {
      console.log ("REMOVING FILES");
    });
  });
};