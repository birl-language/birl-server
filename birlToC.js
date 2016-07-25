/**********************************************************************
* 
* birlToC.js: recebe um código em BIRL e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (birlCode) {
    //Traduzindo a MAIN
    var code = birlCode.replace(/(HORA DO SHOW)/g, 'int main (void) {'); 
    //Traduzindo o BIRL
    code = code.replace(/(BIRL)/g, '}');
    //Traduzindo printf
    code = code.replace(/(CE QUER VER ESSA PORRA\?)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(QUE QUE CE QUER MONSTRAO\?)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(ELE QUE A GENTE QUER\?)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(NAO VAI DAR NAO)(.*)/g, '} else $2 {');
    //Traduzindo while
    code = code.replace(/(NEGATIVA BAMBAM)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(MAIS QUERO MAIS)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(OH O HOME AI PO \()(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(BORA CUMPADE)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(AJUDA O MALUCO TA DOENTE)/g, '');
    code = code.replace(/(AJUDA O MALUCO QUE TA DOENTE)/g, '');

    //Removendo #includes
    code = code.replace(/(#include)/g, '');
    
    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;
    
    return code;
}