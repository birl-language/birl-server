/**********************************************************************
* 
* exec.js: executa o arquivo file, com a entrada sendo stdin e retorna
* a saída na resposta res da requisição.
*
***********************************************************************/
module.exports = function (file, stdin, res) {
  const exec = require('child_process').exec("./" + file);
  const fs = require('fs');
  var out;
  var err;

  // Entrada do arquivo será stdin + "\n"
  exec.stdin.write(stdin + "\n");

  // Saída padrão do arquivo
  exec.stdout.on('data', function (data) {
    console.log("STDOUT: \"" + data + "\"");
    out = data;
  });

  // Saída de erros do arquivo
  exec.stderr.on('data', function (data) {
    console.log("STDERR: \"" + data + "\"");
    err = data;
  });

  exec.on('close', function (ret) {
    console.log("Return: " + ret);
    
    // Apagando os arquivos criados
    fs.unlink(file + '.c', function () {});
    fs.unlink(file, function () {});

    // Enviando a resposta
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({  stdout: out,
                              stderr: err,
                              return: ret }));
  });
}

/*//////////////////////////////////////////////////////////////////////
//////FAZER BUGAR DEPOIS DE UM TEMPO, MELHORAR SINTAXE////////////
//////////////////////////////////////////////////////////////////////*/