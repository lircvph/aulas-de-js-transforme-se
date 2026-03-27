//Atribuindo varios eventos a um so elemento
const btn =document.querySelector(".btn");
const conteudo = document.querySelector(".conteudo");

btn.addEventListener("mouseover", () => {
    conteudo.innerHTML += "Mouse over <br>";
    conteudo.style.color = "green";
});

btn.addEventListener("click", () => {
    conteudo.innerHTML += "Click <br>";
    conteudo.style.color = "blue";
});

btn.addEventListener("mouseout", () => {
    conteudo.innerHTML += "Mouse out <br>";
    conteudo.style.color = "red";
});

// Utilizando objetos Window
const conteudo2 = document.querySelector("conteudo-window");

window.addEventListener("resize", () => {
    conteudo2. innerHTML = Math.random();
});