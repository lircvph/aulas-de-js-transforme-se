const div1 = document.querySelector(".div1");
const p1 = document.querySelector(".p1");
const div2 = document.querySelector(".div2");
const p2 = document.querySelector(".p2");

p1.addEventListener("click", () => {
    alert("Você clicou no elemento branco para caso você seja daltônico e não saiba.")
}, false);

div1.addEventListener("click", () => {
    alert("Você clicou no elemento acinzulado para caso você seja daltônico e não saiba.")
}, false);

p2.addEventListener("click", () => {
    alert("Você clicou no elemento branco para caso você seja daltônico e não saiba.")
}, true);

div2.addEventListener("click", () => {
    alert("Você clicou no elemento acinzulado para caso você seja daltônico e não saiba.")
}, true);