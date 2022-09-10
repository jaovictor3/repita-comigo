/*Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.*/

var n1 = parseInt(prompt("Informe o valor da primeira nota: "));
while (n1 < 0 || n1 > 10){
    n1 = parseInt(prompt("Informe um valor válido:"));
}

var n2 = parseInt(prompt("Informe o valor da segunda: "));
while (n2 < 0 || n2 > 10){
    n2 = parseInt(prompt("informe um valor válido: "));
}

var n3 = parseInt(prompt("Informe o valor de terceira nota :"));
while (n3 < 0 || n3 > 10){
    n3 = parseInt(prompt("Informe um valor válido :"));
}

var n4 = parseInt(prompt("Informe o valor da quarta nota:"));
while (n4 < 0 || n4 > 10){
    n4 = parseInt(prompt("Informe um valor válido: "));
}

var n5 = parseInt(prompt("Informe o valor da quinta nota:"));
while (n5 < 0 || n5 > 10){
    n5 = parseInt(prompt("Informe um valor válido:"));
}

var n6 = parseInt(prompt("Informe o valor da sexta nota:"));
while (n6 < 0 || n6 > 10){
    n6 = parseInt(prompt("Informe um valor válido:"));
}

var media = (n1 + n2 + n3 + n4 + n5 + n6) /6;
alert("A média do aluno é " + media);