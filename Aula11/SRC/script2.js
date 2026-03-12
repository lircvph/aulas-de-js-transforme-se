// Criação de métodos
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        gatos: {
            nome: "George Richard Weasley",
            cor: "Laranja",
            raca: "Sem raça",
            miar: function (){
                return this.nome + " Miou: miau miau!";
            }
        },
    },
}

console.log(casa.gatos.nome.miar());