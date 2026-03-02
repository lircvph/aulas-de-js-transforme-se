const hora = new Date().getHours();
const minutos = new Date().getMinutes();
const horario = String(hora) + ':' + String(minutos)
let saudacao = 'Bom dia!';

if (hora > 18){
    saudacao = 'Boa noite!';
} else if (hora > 12) {
    saudacao = 'Boa tarde';
} else (hora < 12) {
    saudacao = 'Bom dia';
}

document.getElementById('ex1').innerHTML = saudacao;
// document.getElementById('ex2').innerHTML = 'Agora são: ' + horario;
document.getElementById('ex2').innerHTML = `Agora são: ${horario}`;
