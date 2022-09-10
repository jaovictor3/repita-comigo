/*8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário*/


var contagem = 0;

var n = parseInt(prompt("Informe um Valor"));
while (n <= 0){
    n = parseInt(prompt("Informe um valor maior que Zero."));
}
while (n>= 0){
    document.write(n + " ");
    n--;
}