// Utilizando o operador in
const pessoa = {
    primeiroNome: "Sophia Liz",
    ultimoNome: "Cavalcante",
    idade: 18,
    pais: "Brasil",
}

let exIN = ("idade" in pessoa);

console.log(exIN);

// Criação de objetos alinhados
const pessoa2 = {
    primeiroNome: "Dean",
    segundoNome: "Winchester",
    carros: {
        carro1: "Impala 67",
        carro2: "Skyline",
        carro3: "Eclipse",
    },
    motos: {
        moto1: "Kawasaki Ninja 400",
        moto2: "Kawasaki HR2",
    },
}

console.log(pessoa2.carros.carro1);
console.log(pessoa2.carros["carro3"]);
console.log(pessoa2["carros"]["carro3"]);
console.log(pessoa2.motos["moto1"]);