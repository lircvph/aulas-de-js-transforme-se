// Utilização do método charAt()
let texto = "Abacate";
let exemploCharAt = texto.charAt(5);
console.log(exemploCharAt);

// Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);

// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

// Utilização do método at()
let exAt = texto.at(-2);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

// Utilização do método slice()
let frutas = "Banana, Maçã e Uva";
let exSlice = frutas.slice(2, 11);
console.log(exSlice);

// Utilização de toUpperCase() e toLowerCase()
let carro = "Gol gti";
let carro2 = "IMPALA";

let exLowerCase = carro2.toLowerCase(); // Tudo em minúsculo
let exUpperCase = carro.toUpperCase();  // Tudo em maiúsculo

console.log(exLowerCase);
console.log(exUpperCase);

// Utilização do método isWellFormed()
// Verifica se a string contém sequências de caracteres Unicode válidas
let saudacao = "Olá, seja bem-vindo!";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);