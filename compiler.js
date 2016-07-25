/**********************************************************************
* 
* compiler.js: compila o arquivo file e chama o exec.js para executa-lo
*
***********************************************************************/
module.exports = function (file, stdin, res) {
  const exec = require('child_process').exec;
  const fs = require('fs');
  const run = require('./exec.js');

  // compila com o gcc
  exec('gcc ' + file + '.c -o' + file, function (error, stdout, stderr) {
    //se houver erro de compilação, respondemos a requisição com um erro.
    if (error) {
      console.log ("ERROR: " + error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({  error: "ERRO DE COMPILAÇÃO PAI!\n",
                                stdout: null,
                                stderr: null,
                                return: null }));
      fs.unlink(file + '.c', function () {});
    }
    //caso contrário, rodamos o arquivo que acabamos de compilar
    else
      run(file, stdin, res)
  });
};