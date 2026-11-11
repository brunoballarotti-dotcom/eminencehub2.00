const anime = document.getElementById("anime");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const nomeAnime = document.getElementById("nomeAnime");
const episodiosCadastro = document.getElementById("episodiosCadastro");
const cadastrar = document.getElementById("cadastrar");
const mensagem = document.getElementById("mensagem");
const listaAnimes = document.getElementById("listaAnimes");

let favorito = true;
let animes = [];

console.log("Sistema Eminence Hub iniciado!");

function pesquisarAnime() {
  console.log("Pesquisando:", anime.value);

  let encontrado = false;

  for (let i = 0; i < animes.length; i++) {
    if (anime.value.toLowerCase() == animes[i].nome.toLowerCase()) {
      resultado.textContent =
        "Anime pesquisado: " +
        animes[i].nome +
        ", possui " +
        animes[i].episodios +
        " episódios.";

      console.log("Anime encontrado:", animes[i]);

      encontrado = true;
    }
  }

  if (!encontrado) {
    favorito = anime.value.toLowerCase() == "shadow";

    if (favorito) {
      resultado.textContent =
        "Você escolheu a Eminência nas Sombras. I Am Atomic.";

      console.log("Pesquisa especial do Shadow.");
    } else {
      resultado.textContent = "Anime não encontrado.";

      console.log("Anime não encontrado.");
    }
  }
}

botao.addEventListener("click", pesquisarAnime);

cadastrar.addEventListener("click", function () {
  const nome = nomeAnime.value.trim();
  const qtdEpisodios = episodiosCadastro.value;

  console.log("Tentando cadastrar anime...");

  if (nome === "" || qtdEpisodios === "") {
    mensagem.textContent = "Preencha todos os campos.";

    mensagem.className = "erro";

    console.log("Erro: campos vazios.");
  } else {
    animes.push({
      nome: nome,
      episodios: qtdEpisodios,
    });

    console.log("Anime cadastrado:", nome);
    console.log("Lista atual:", animes);

    mensagem.textContent = "Registro adicionado ao arquivo da Shadow Garden.";

    mensagem.className = "sucesso";

    listaAnimes.innerHTML += nome + " - " + qtdEpisodios + " episódios<br>";

    nomeAnime.value = "";
    episodiosCadastro.value = "";
  }
});
