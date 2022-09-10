//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.


var n1 = parseInt(prompt("Informe um valor:"));
var n2 = parseInt(prompt("Informe outro valor: "));
var acum = 0;
var resultado = n2-n1;
var media = 0;

while(n1 <= n2 ){
    acum = acum + n1
    console.log(acum)
    n1++; 
} 


media = parseInt (acum/resultado);
document.write("A média de aritmética é de: " + " "+ media)


