// app.js — Site de Receitas Dinâmico

// Estrutura JSON com as receitas
const receitas = [
  {
    id: 1,
    titulo: "Lasanha de Frango",
    descricao: "Camadas cremosas de frango desfiado com queijo e molho branco irresistível.",
    imagem: "assets/img/lasanha-de-frango.jpg",
    ingredientes: [
      "500g de peito de frango cozido e desfiado",
      "1 pacote de massa para lasanha",
      "2 xícaras de molho branco",
      "1 xícara de queijo mussarela ralado",
      "Sal, pimenta e orégano a gosto"
    ],
    preparo: [
      "Monte camadas alternando massa, molho, frango e queijo.",
      "Finalize com queijo e leve ao forno por 30 minutos.",
      "Sirva quente e aproveite!"
    ],
    categoria: "Massas",
    autor: "Chef Ana Paula",
    tempo: "45 minutos",
    porcoes: "6 porções"
  },
  {
    id: 2,
    titulo: "Panqueca de Carne",
    descricao: "Recheio suculento de carne moída envolto em massa leve e saborosa.",
    imagem: "assets/img/panquecadecarne.jpg",
    ingredientes: [
      "1 xícara de leite",
      "1 ovo",
      "1 xícara de farinha de trigo",
      "200g de carne moída refogada",
      "Molho de tomate e queijo ralado"
    ],
    preparo: [
      "Bata os ingredientes da massa no liquidificador.",
      "Frite pequenas porções em frigideira antiaderente.",
      "Recheie com carne, enrole e cubra com molho e queijo."
    ],
    categoria: "Massas",
    autor: "Chef João Pedro",
    tempo: "30 minutos",
    porcoes: "4 porções"
  },
  {
    id: 3,
    titulo: "Moqueca Baiana",
    descricao: "Peixe cozido no leite de coco com pimentões e temperos típicos da Bahia.",
    imagem: "assets/img/moqueca-de-peixe-baiana.jpg",
    ingredientes: [
      "500g de peixe em postas",
      "1 vidro de leite de coco",
      "1 pimentão de cada cor",
      "Coentro, cebola, alho e azeite de dendê"
    ],
    preparo: [
      "Refogue os temperos, adicione o peixe e o leite de coco.",
      "Cozinhe por 20 minutos em fogo baixo.",
      "Finalize com coentro e sirva com arroz branco."
    ],
    categoria: "Peixes",
    autor: "Chef Marina Souza",
    tempo: "40 minutos",
    porcoes: "5 porções"
  },
  {
    id: 4,
    titulo: "Escondidinho de Carne Seca",
    descricao: "Purê de mandioca cremoso com recheio de carne seca desfiada e queijo gratinado.",
    imagem: "assets/img/Escondidinho-de-Carne-Seca.jpg",
    ingredientes: [
      "500g de carne seca dessalgada e desfiada",
      "1kg de mandioca cozida e amassada",
      "200ml de leite e 1 colher de manteiga",
      "Queijo ralado a gosto"
    ],
    preparo: [
      "Prepare o purê com a mandioca, leite e manteiga.",
      "Monte o escondidinho com camadas de purê e carne.",
      "Finalize com queijo e leve ao forno para gratinar."
    ],
    categoria: "Prato principal",
    autor: "Chef Lucas Almeida",
    tempo: "50 minutos",
    porcoes: "6 porções"
  },
  {
    id: 5,
    titulo: "Pudim de Leite Condensado",
    descricao: "Clássico da culinária brasileira, com calda dourada e textura perfeita.",
    imagem: "assets/img/pudimdeleitecondensado.jpg",
    ingredientes: [
      "1 lata de leite condensado",
      "1 lata de leite (use a mesma medida)",
      "3 ovos",
      "1 xícara de açúcar para a calda"
    ],
    preparo: [
      "Derreta o açúcar até formar uma calda e espalhe na forma.",
      "Bata os demais ingredientes e despeje sobre a calda.",
      "Asse em banho-maria por 1 hora e deixe esfriar."
    ],
    categoria: "Sobremesas",
    autor: "Chef Carla Ramos",
    tempo: "1h 15min",
    porcoes: "8 porções"
  }
];

// === Função para carregar os cards de receitas na home ===
function carregarHome() {
  const container = document.getElementById("lista-receitas");
  if (!container) return;

  container.innerHTML = receitas.map(receita => `
    <div class="col-md-4 mb-3">
      <div class="card h-100 shadow-sm">
        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${receita.titulo}</h5>
          <p class="card-text">${receita.descricao}</p>
          <a href="detalhes.html?id=${receita.id}" class="btn btn-danger mt-auto">Ver Detalhes</a>
        </div>
      </div>
    </div>
  `).join("");
}

// === Função para montar o carrossel de destaques ===
function carregarSlider() {
  const slider = document.getElementById("itens-slider");
  if (!slider) return;

  slider.innerHTML = receitas.slice(0, 3).map((receita, index) => `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${receita.imagem}" class="d-block w-100" alt="${receita.titulo}">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
        <h5>${receita.titulo}</h5>
        <p>${receita.descricao}</p>
      </div>
    </div>
  `).join("");
}

// === Função para exibir os detalhes da receita ===
function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const receita = receitas.find(r => r.id === id);
  const container = document.getElementById("detalhes-receita");

  if (!receita || !container) {
    container.innerHTML = `<p class="text-center text-danger">Receita não encontrada.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="card shadow-lg">
      <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
      <div class="card-body">
        <h2 class="card-title text-danger">${receita.titulo}</h2>
        <p class="card-text">${receita.descricao}</p>

        <h4 class="mt-4">Ingredientes</h4>
        <ul>${receita.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>

        <h4 class="mt-4">Modo de Preparo</h4>
        <ol>${receita.preparo.map(p => `<li>${p}</li>`).join("")}</ol>

        <div class="mt-4">
          <p><strong>Categoria:</strong> ${receita.categoria}</p>
          <p><strong>Autor:</strong> ${receita.autor}</p>
          <p><strong>Tempo de preparo:</strong> ${receita.tempo}</p>
          <p><strong>Rendimento:</strong> ${receita.porcoes}</p>
        </div>

        <a href="index.html" class="btn btn-danger mt-3">Voltar</a>
      </div>
    </div>
  `;
  const apiURL = "http://localhost:3000/receitas";

async function carregarReceitas() {
  try {
    const resposta = await fetch(apiURL);
    const receitas = await resposta.json();

    const container = document.querySelector("#lista-receitas");
    container.innerHTML = "";

    receitas.forEach(receita => {
      const card = `
        <div class="col-md-3 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
              <h5 class="card-title">${receita.titulo}</h5>
              <p class="card-text">${receita.descricao}</p>
              <a href="detalhes.html?id=${receita.id}" class="btn btn-danger w-100">Ver Detalhes</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (erro) {
    console.error("Erro ao carregar receitas:", erro);
  }
}

document.addEventListener("DOMContentLoaded", carregarReceitas);


}
