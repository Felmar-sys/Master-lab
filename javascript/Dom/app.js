
const container = document.querySelector("#container");

const paragrafo = document.createElement("p");
paragrafo.textContent = "Ei, eu sou vermelho!";
paragrafo.style.color = "red";

container.appendChild(paragrafo);

const subTitulo = document.createElement("h3");
subTitulo.textContent = "Eu sou um h3 azul!";
subTitulo.style.color = "blue";

container.appendChild(subTitulo);