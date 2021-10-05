var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var botao = document.getElementById("botao");

  if (numeroTentativas > 1) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou.";
      botao.onClick = Resetar();
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve inserir um número entre 0 e 10.";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou. O número secreto é maior.<br/>Você ainda possui " +
        --numeroTentativas +
        " tentativas.";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou. O número secreto é menor.<br/>Você ainda possui " +
        --numeroTentativas +
        " tentativas.";
    }
  } else {
    if (chute == numeroSecreto) {
      elementoResultado = "Você acertou.";
    } else {
      elementoResultado.innerHTML =
        "Você perdeu. O número secreto era " +
        numeroSecreto +
        ".<br/>Tente novamente.";
    }
    botao.onClick = Resetar();
  }
}
function Resetar() {
  var botao = document.getElementById("botao");
  numeroSecreto = parseInt(Math.random() * 11);
  numeroTentativas = 3;
  botao.onClick = Chutar;
}
