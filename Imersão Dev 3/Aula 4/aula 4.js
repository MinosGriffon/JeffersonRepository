//forEach e while

//var vogais = ["A", "E", "I", "O", "U"];

//var i = 0;
//while (i < vogais.length) {
//  console.log(vogais[i++]);
//}

//vogais.forEach(function (elemento, indice, array) {
//  console.log(indice);
//});

//Aluraflix
var listaFilmes = [
  [
    "Minority Report - A Nova Lei",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/40/36/20143627.jpg"
  ],
  [
    "A.I. Inteligência Artificial",
    "https://br.web.img3.acsta.net/pictures/210/106/21010605_20130606000334824.jpg"
  ],
  [
    "O Enigma de Outro Mundo",
    "https://upload.wikimedia.org/wikipedia/pt/f/f9/Thing_1982.png"
  ],
  [
    "O Planeta dos Macacos",
    "https://media.fstatic.com/CKUILYwTfgB9cJCQ1N8HacC1Hc0=/290x478/smart/media/movies/covers/2018/08/planeta.jpg"
  ]
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.getElementById("cartaz").innerHTML +=
    "<img class='filmes' src=" + listaFilmes[i][1] + ">";
}

function adicionar() {
  var titulo = document.getElementById("titulo").value;
  var url = document.getElementById("url").value;
  var aviso = document.getElementById("aviso");
  var cartaz = document.getElementById("cartaz");
  var verificacao = false;
  for (var i = 0; i < listaFilmes.length; i++) {
    if (titulo == listaFilmes[i][0] || url == listaFilmes[i][1]) {
      aviso.innerHTML = "O filme já consta no catálogo.";
      verificacao = true;
      break;
    }
  }
  if (verificacao == false) {
    listaFilmes.push([titulo, url]);
    cartaz.innerHTML += "<img class='filmes' src=" + url + ">";
    aviso.innerHTML = "Filme adicionado ao catálogo com sucesso.";
  }
}
