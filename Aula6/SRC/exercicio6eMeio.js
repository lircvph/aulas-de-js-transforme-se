// Exercício 6.5: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. 

alert("Calculo da área de um retângulo");

let base = parseFloat(prompt("Informe o tamanho da base do retângulo."));
let altura = parseFloat(prompt("Informe a altura do retângulo"));
let area = (altura * base);

alert(`O valor da área do retângulo de base ${base} e a altura ${altura} é: ${area}`);