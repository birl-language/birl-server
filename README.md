## COMPILADOR DE BIRL ##
O compilador de BIRL é um server que recebe um JSON com o código BIRL e a entrada padrão do programa e retorna a saída padrão, saída de erro e eventuais erros de compilação em JSON para que a view possa interpretar e mostrar ao usuário.

## FUNCIONAMENTO ##
Para compilar em BIRL, primeiro recebemos o código, traduzimos para C e salvamos no servidor em um arquivo temporário, com nome aleatório, dessa forma, conseguimos usar o gcc para compilar e, logo após, executá-lo, respondendo a requisição com um JSON contendo as saídas.