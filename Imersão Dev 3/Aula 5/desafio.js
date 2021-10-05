function converter(moeda) {
  var valorElemento = parseFloat(document.getElementById("valor").value);
  if (document.getElementById("R$").checked) {
    converterReal(valorElemento);
  } else if (document.getElementById("U$").checked) {
    converterDolar(valorElemento);
  } else if (document.getElementById("€").checked) {
    converterEuro(valorElemento);
  } else if (document.getElementById("₿").checked) {
    converterBitcoin(valorElemento);
  }
}

function converterReal(valor) {
  var texto = "";
  var valorDolar = valor * 0.19;
  var valorEuro = valor * 0.16;
  var valorBitcoin = valor * 0.0000039;
  if (document.getElementById("dolar").checked) {
    texto += "O valor em dólar é U$" + valorDolar.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("euro").checked) {
    texto += "O valor em euro é €" + valorEuro.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("bitcoin").checked) {
    texto += "O valor em bitcoin é ₿" + valorBitcoin + ".";
  }
  document.getElementById("valorConvertido").innerHTML = texto;
}

function converterDolar(valor) {
  var texto = "";
  var valorReal = valor * 5.29;
  var valorEuro = valor * 0.85;
  var valorBitcoin = valor * 0.000021;
  if (document.getElementById("real").checked) {
    texto += "O valor em real é R$" + valorReal.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("euro").checked) {
    texto += "O valor em euro é €" + valorEuro.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("bitcoin").checked) {
    texto += "O valor em bitcoin é ₿" + valorBitcoin + ".";
  }
  document.getElementById("valorConvertido").innerHTML = texto;
}

function converterEuro(valor) {
  var texto = "";
  var valorReal = valor * 6.2;
  var valorDolar = valor * 1.17;
  var valorBitcoin = valor * 0.000025;
  if (document.getElementById("real").checked) {
    texto += "O valor em real é R$" + valorReal.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("euro").checked) {
    texto += "O valor em dólar é U$" + valorDolar.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("bitcoin").checked) {
    texto += "O valor em bitcoin é ₿" + valorBitcoin + ".";
  }
  document.getElementById("valorConvertido").innerHTML = texto;
}

function converterBitcoin(valor) {
  var texto = "";
  var valorReal = valor * 243586.69;
  var valorDolar = valor * 46038.8;
  var valorEuro = valor * 39312.53;
  if (document.getElementById("real").checked) {
    texto += "O valor em real é R$" + valorReal.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("euro").checked) {
    texto += "O valor em dólar é U$" + valorDolar.toFixed(2) + ".<br/>";
  }
  if (document.getElementById("bitcoin").checked) {
    texto += "O valor em euro é €" + valorEuro.toFixed(2) + ".";
  }
  document.getElementById("valorConvertido").innerHTML = texto;
}
