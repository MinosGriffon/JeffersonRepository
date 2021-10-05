//Função Ano-Luz

function ConverterDistancia() {
  var distanciaElemento = document.getElementById("distancia");
  var distancia = distanciaElemento.value;
  var distanciaEmQuilometro = parseFloat(distancia);
  var distanciaAnoLuz = distanciaEmQuilometro * 1.057e-13;
  var elementoDistanciaConvertida = document.getElementById("valorConvertido");
  var distanciaConvertida =
    "O valor em anos-luz é " +
    distanciaAnoLuz.toFixed(4) +
    ", equivalente a " +
    distanciaAnoLuz.toFixed(4) +
    " anos de viagem.";
  elementoDistanciaConvertida.innerHTML = distanciaConvertida;

  var elementoConvertidoBitCoin = document.getElementById("valorBitCoin");
  elementoConvertidoBitCoin.innerHTML = "";
}

//Função Real

function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.24;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorBitCoin = valorEmDolarNumerico / 46913.3;
  var elementoConvertidoBitCoin = document.getElementById("valorBitCoin");
  elementoConvertidoBitCoin.innerHTML = "O valor em BitCoin é ₿" + valorBitCoin;
}

//Função Euro

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuro = valorEmDolarNumerico * 0.85;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Euro é " + valorEmEuro.toFixed(2) + "€";
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorBitCoin = valorEmDolarNumerico / 46913.3;
  var elementoConvertidoBitCoin = document.getElementById("valorBitCoin");
  elementoConvertidoBitCoin.innerHTML = "O valor em BitCoin é ₿" + valorBitCoin;
}

//Função Temperatura

function ConverterTemperatura(evento) {
  var temperaturaElemento = parseFloat(
    document.getElementById("temperatura").value
  );
  var temperaturaConvertida;
  var conversao = document.getElementById("valorConvertido");
  var textoDeSaida;
  if (evento == "Kelvin") {
    temperaturaConvertida = temperaturaElemento + 273;
    textoDeSaida = "A temperatura em Kelvin é " + temperaturaConvertida + "K";
    conversao.innerHTML = textoDeSaida;
  }
  if (evento == "Fahrenheit") {
    temperaturaConvertida = temperaturaElemento * 1.8 + 32;
    textoDeSaida =
      "A temperatura em Fahrenheit é " + temperaturaConvertida + "ºF";
    conversao.innerHTML = textoDeSaida;
  }

  var elementoConvertidoBitCoin = document.getElementById("valorBitCoin");
  elementoConvertidoBitCoin.innerHTML = "";
}
