//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

let i = 1;

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

/** @param {MouseEvent} event */
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  console.log(ativo);
  pergunta.setAttribute("aria-expanded", ativo);
}

function mostrarRespostas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(mostrarRespostas);

// Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}