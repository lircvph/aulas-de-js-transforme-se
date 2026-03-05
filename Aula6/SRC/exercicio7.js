// Exercício 7: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

let anos = parseInt(prompt("Informe sua idade"));
let meses = parseInt(prompt("Informe quantos meses já se passaram desde seu aniversário"));
let dias = parseInt(prompt("Informe quantos dias já se epassaram desde seu aniversário"));

let idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("Você existe há: " + idadeEmDias + " dias");