let x = 8;

if (x == 5){
    // console.log('A variável é igual a 5');
} else {
    // console.log('A variável não é oigual a 5');
}

let y = 3;

if (y > 3){
    console.log('A variável Y é maior que 3!');
} else if (y == 3) {
    // console.log('A variável Y é igual a 3!');
} else {
    console.log('A variável Y possui um valor diferente das verificações');
}


// Exemplo de If
const elemento = document.getElementById('ex1');
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos)

if (pegarHoras > 18){
    elemento.innerHTML = 'Boa noite!';
}

// Exemplo de If 2
let idade = 18;
let texto ='Você é novo demais para dirigir!';

if (idade >=18) {
    texto = 'Você tem idade para dirigir!';
}

document.getElementById('ex2').innerHTML = texto;

//If alinhado
let idade2 = 18;
let pais = 'Brasil';
let mensagem = 'Você não pode dirigir!';

// if(pais == 'Brasil') {
//    if(idade2 >= 16) {
//        mensagem = 'Você pode dirigir!';
//    }
//}

// document.getElementById('ex3').innerHTML = mensagem

let idade3 = 16;
let pais2 = 'Estados Unidos';
let mensagem2 = 'Você não pode dirigir';

if (pais2 == 'Estados Unidos' && idade3 == 15) {
    mensagem2 = 'Você pode dirigir';
}

document.getElementById('ex3').innerHTML = mensagem2