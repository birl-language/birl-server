/**********************************************************************
* 
* code_exec.js: recebe um código em BIRL, uma entrada padrão e um valor
* de resposta, cria o arquivo .c equivalente ao código BIRL, compila e
* o executa.
*
***********************************************************************/
var crypto = require('crypto');

// Cria um valor hexadecimal com tamanho len
function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex')
        .slice(0,len);
};


module.exports = function (bCode, stdin, res) {
    const fs   = require('fs');
    const comp = require('./compiler.js');
    const code = require('./birlToC.js')(bCode);

    var rName = randomValueHex(15).toString();
  
    // Escrevendo a stdin
    fs.writeFile(rName + ".txt", stdin, function (error) {
        // Se ocorrer erro, retorna a resposta
        if (error) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({    error: "ERRO INTERNO PAI!\n",
                                        stdout: null,
                                    }));
        }

        // Se não, escreve o código em um .c com nome aleatorio
        //e chama compiler
        
        fs.writeFile(rName + ".c", code, function (err) {
            // se ocorrer erro, retorna JSON 
            if (err) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({    error: "ERRO INTERNO PAI!\n",
                                            stdout: null,
                                    }));
                return;
            }
            // caso contrário, compila e executa
            process.nextTick(function () {
                comp(rName, res);
            });
        });
    });
};
