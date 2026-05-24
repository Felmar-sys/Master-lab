
const container = document.querySelector("#container");

const paragrafo = document.createElement("p");
paragrafo.textContent = "Ei, eu sou vermelho!";
paragrafo.style.color = "red";

container.appendChild(paragrafo);

const subTitulo = document.createElement("h3");
subTitulo.textContent = "Eu sou um h3 azul!";
subTitulo.style.color = "blue";

container.appendChild(subTitulo);

const caixaRosa = document.createElement("div");
caixaRosa.style.border = "1px solid black";
caixaRosa.style.backgroundColor = "pink";

const h1CaixaRosa = document.createElement("h1");
h1CaixaRosa.textContent = "Eu estou numa div.";

caixaRosa.appendChild(h1CaixaRosa);

const pCaixaRosa = document.createElement("p");
pCaixaRosa.textContent = "EU TAMBEM!";

caixaRosa.appendChild(pCaixaRosa);
container.appendChild(caixaRosa);