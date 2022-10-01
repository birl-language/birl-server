/**********************************************************************
* 
* code_verification.js: recebe um código em birl e verifica se o código
* pode ser executado ou nao.
*
***********************************************************************/
module.exports = function (birlCode) {
    return birlCode.match(/([\\]\n|(#.*define)|(printf)|(puts)|(putchar)|(#.*include)|(system)|(popen)|(fopen)|(fgets)|(execl))/g);
}
