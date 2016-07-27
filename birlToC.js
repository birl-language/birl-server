/**********************************************************************
*
* birlToC.js: recebe um código em BIRL e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (birlCode) {
    // A tradução é feita com um simples replace no código birl com o seu respectivo valor
    //em C, a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro
    //de aspas.
    var code = birlCode;

    //Traduzindo a MAIN
    var code = code.replace(/(HORA DO SHOW)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {');
    //Traduzindo o BIRL
    code = code.replace(/(BIRL)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(CE QUER VER ESSA PORRA\?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(QUE QUE CE QUER MONSTRAO\?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(ELE QUE A GENTE QUER\?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(NAO VAI DAR NAO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else $2 {');
    //Traduzindo else if
    code = code.replace(/(QUE NUM VAI DAR O QUE\?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(NEGATIVA BAMBAM)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(MAIS QUERO MAIS)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(OH O HOME AI PO \()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(BORA CUMPADE)(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(AJUDA O MALUCO TA DOENTE)(?=(?:[^"]|"[^"]*")*$)/g, '');
    code = code.replace(/(AJUDA O MALUCO QUE TA DOENTE)(?=(?:[^"]|"[^"]*")*$)/g, '');
    //Traduzindo struct
    code = code.replace(/(MONSTRAO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'struct $2 {');
    //Traduzindo malloc
    code = code.replace(/(AQUI NOS CONSTROI FIBRA)(?=(?:[^"]|"[^"]*")*$)/g, 'malloc');
    code = code.replace(/(AQUI NOIS CONSTROI FIBRA)(?=(?:[^"]|"[^"]*")*$)/g, 'malloc');
    //Traduzindo free
    code = code.replace(/(SAI FILHO DA PUTA)(?=(?:[^"]|"[^"]*")*$)/g, 'free');
    code = code.replace(/(SAI FILHA DA PUTA)(?=(?:[^"]|"[^"]*")*$)/g, 'free');

    //Removendo #includes, para evitar que o usuário possa incluir stdlib
    code = code.replace(/(#include.*)/g, '');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    return code;
}
