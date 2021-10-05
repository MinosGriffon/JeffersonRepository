var jogadores = [];

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas;
  return pontos;
}

function exibirJogadores(jogadores) {
  var elemento = "";
  for (i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].imagem + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    //    elemento +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(i) {
  jogadores.forEach(function (nome) {
    nome.derrotas++;
    nome.pontos = calcularPontos(nome);
  });
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.derrotas--;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
  jogadores.forEach(function (jogador) {
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
  });
  exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarJogador() {
  var nome = document.getElementById("nome").value;
  var url = document.getElementById("imagem").value;
  var imagem = "<img src=" + url + ">";
  var jogador = {
    imagem: imagem,
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(jogador);
  exibirJogadores(jogadores);
}

function resetar() {
  jogadores.forEach(function (jogador) {
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = 0;
  });
  exibirJogadores(jogadores);
}
