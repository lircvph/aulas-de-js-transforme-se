//Exemplo de utilização de lenght em string

let texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let tamanho = texto.length
const elemento = document.querySelector('.ex1');
elemento.innerHTML=tamanho
console.log(tamanho);

elemento.innerHTML = `
    <style>
        .container {
            display: flex;
            gap: 30px;
            background-color: darkgrey;
        }

        .container div {
            width: 100px;
            height: 100px;
            background-color: grey;
        }
    </style>

    <h1>ESSE É UM NOVO H1</h1>
    <div class="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`;

//Exemplo de utilização do caractere de escape

// let texto2 = 'Somente a dor \'coletiva\' gera a união';
// console.log(texto2);

// let texto3 = "Somente a dor \"coletiva\" gera a união";
// console.log(texto3);

// let texto4 = "Somente a dor \\ coletiva gera a união";
// console.log(texto4);

//Exemplo de template string

let nome = "Sophia Liz";
let idade = 18;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(frase);

//Exemplo de adição em HTML com template string em JS

const elemento2 = document.querySelector('.ex2');

elemento2.innerHTML = `
    <style>
        .container2 {
        background-color: darkgrey;
        display: flex;
        gap: 30px;
        justify-content: center;
        }

        .container2 div{
        width: 100px;
        height: 100px;
        background-color: gray;
        align-content: center;
        text-align: center;
        }
    </style>

    <h2>Exemplo de adição de conteúdo HTML com JavaScript:</h2>
    <div class="container2">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`;