//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

var n1 = parseInt(prompt("Informe um número: "));
var n2 = parseInt(prompt("Informe outro número"));

while (n2 <= 0){
    n2 = parseInt(prompt("Infome um número maior que zero: "));
}
var resultado = n1/n2;
alert("O resultado de " + " " + n1 + " " + "dividido por "+ " "+ n2 + " " +"é " + resultado);