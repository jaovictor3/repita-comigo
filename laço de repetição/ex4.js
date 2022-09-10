//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).


var n1 = 15;
var n2 = 100;
var acum = 0;

while(n1 < n2){
    n1 += 1;
    acum += n1;
}
console.log(n1);
console.log(acum);
var media = parseInt(acum/85);
    alert("A média é " + media);
