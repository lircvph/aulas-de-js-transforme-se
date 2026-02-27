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
