/* Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.*/

var dentro = 0;
var fora = 0;
var comeco = 0;
var texto = "";

while (comeco < 10) {
    texto = parseInt(prompt("Insira um número abaixo:"));
    if (texto >= 24 && texto <= 42) {
        dentro++;
    } else {
        fora++;
    } comeco++;
    
} 
alert(dentro + " número(s) está(ão) entre 24 e 42, e " + fora + " estão fora.");
