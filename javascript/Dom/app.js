
const container = document.querySelector("#container");

const paragrafo = document.createElement("p");
paragrafo.textContent = "Ei, eu sou vermelho!";
paragrafo.style.color = "red";

container.appendChild(paragrafo);