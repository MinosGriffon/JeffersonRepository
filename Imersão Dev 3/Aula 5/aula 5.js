var listaFilmes = [];

function recarregar() {
  document.getElementById("listaFilmes").innerHTML = "";
  listaFilmes.forEach(function (filme) {
    document.getElementById("listaFilmes").innerHTML +=
      "<img src=" + filme[1] + ">";
  });
  document.getElementById("titulo").value = "";
  document.getElementById("url").value = "";
}

function preencher() {
  var titulo = document.getElementById("titulo").value;
  var url = document.getElementById("url").value;
  var alerta = document.getElementById("alerta");
  return [titulo, url, alerta];
}

function verificar(titulo, url) {
  for (i = 0; i < listaFilmes.length; i++) {
    if (titulo == listaFilmes[i][0] || url == listaFilmes[i][1]) {
      return [true, i];
    }
  }
  return [false];
}

function addFilme() {
  var elementosPreenchidos = preencher();
  var checagem = verificar(elementosPreenchidos[0], elementosPreenchidos[1]);
  if (checagem[0]) {
    elementosPreenchidos[2].innerHTML = "O título já consta no catálogo.";
  } else {
    listaFilmes.push([elementosPreenchidos[0], elementosPreenchidos[1]]);
    recarregar();
    elementosPreenchidos[2].innerHTML =
      "Título adicionado ao catálogo com sucesso.";
  }
}

function removerFilme() {
  var elementosPreenchidos = preencher();
  var checagem = verificar(elementosPreenchidos[0], elementosPreenchidos[1]);
  if (checagem[0]) {
    listaFilmes.splice(checagem[1], 1);
    elementosPreenchidos[2].innerHTML =
      elementosPreenchidos[0] + " foi removido com êxito.";
    recarregar();
  } else {
    elementosPreenchidos[2].innerHTML =
      elementosPreenchidos[0] + " não consta no catálogo.";
  }
}
