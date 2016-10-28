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

    if (code == null) return "";

    //Traduzindo a MAIN
    code = code.replace(/(HORA DO SHOW)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {'); 
    //Traduzindo o BIRL
    code = code.replace(/(BIRL)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(CE QUER VER ESSA PORRA[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(QUE QUE CE QUER MONSTR[AÃ]O[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(ELE QUE A GENTE QUER[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(N[AÃ]O VAI DAR N[AÃ]O)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(QUE NUM VAI DAR O QUE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    code = code.replace(/(QUE N[AÃ]O VAI DAR O QUE[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(NEGATIVA BAMBAM)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(MAIS QUERO MAIS)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(O[H]? O HOM[EI][M]? A[IÍ] PO[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(BORA CUMPAD[EI])(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(AJUDA O MALUCO TA DOENTE)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    code = code.replace(/(AJUDA O MALUCO QUE TA DOENTE)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/(SAI FILH[OA] DA PUTA)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(VAMO MONSTRO)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');
    //Traduzindo switch
    code = code.replace(/(VAI SUBIR EM ARVORE [EÉ] O CARALHO)(?=(?:[^"]|"[^"]*")*$)/g, 'switch $2{');
    //Traduzindo case
    code = code.replace(/(VOU DERRUBAR TODAS ESSAS ARVORES)(?=(?:[^"]|"[^"]*")*$)/g, 'case');
    //Traduzindo default
    code = code.replace(/(TA COMIGO PORRA)(?=(?:[^"]|"[^"]*")*$)/g, 'default:');

    //Traduzindo os tipos de dados
    code = code.replace(/(FRANGO)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(MONSTRO)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(MONSTRINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(MONSTR[ÃA]O)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(TRAP[EÉ]ZIO DESCENDENTE)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(TRAP[EÉ]ZIO)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(B[IÍ]CEPS)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    console.log ('-----------------------------------------');
    console.log ('CODIGO GERADO:');
    console.log (code);
    console.log ('-----------------------------------------');

    return code;
}
