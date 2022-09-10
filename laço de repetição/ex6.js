//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

/*
var n1 = parseFloat(prompt("Insira uma nota: "));
var n2 = parseFloat(prompt("Insira outra nota: "));
var aprovado = 9.5;
var resultado = (n1 + n2) / 2;
console.log(resultado);


while (resultado < aprovado){
      
if(resultado >= aprovado){
    alert("O Aluno foi aprovado."+ resultado);

}
else if(resultado < aprovado){
    alert("O aluno foi reprovado." + resultado);
}

var sinais = prompt("Deseja calcular outro nota (S/N)");
if(sinais === "S"){
    var n1 = parseFloat(prompt("Insira uma nota: "));
    var n2 = parseFloat(prompt("Insira outra nota: "));
}

else if (sinais === "N"){
    alert("Obrigado por nos escolher");
}
}
*/


var simzin = "S";
var naozin = "N";

var aprovado = 0;
while(simzin != naozin){
    var n1 = parseFloat(prompt("Informe um número: "));
    var n2 = parseFloat(prompt("Informe outro número: "));
    var media = (n1 + n2)/2;
    if(media >= 9.5){
        alert("O aluno(a) foi aprovado " + media)
        simzin = prompt("Deseja continuar ? (S)para sim e (N)para não");
        aprovado++;
    }
    else if(media < 9.5){
        alert("O aluno(a) foi reprovado" + media);
        simzin = prompt("Deseja continuar ? (S)para sim e (N)para não");
    }
}

alert("Tem "+ aprovado+ " "+ "aprovados.");
