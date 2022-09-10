/*Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.*/

var calc = parseInt(prompt("Insira o valor:"));

    for(var i=1; i<=calc; i++){
        for(var j=1; j<=calc; j++){
        document.write(i+" x "+j+" = "+i*j+" <br> "); 
        }
        document.write("<hr>")
    }
