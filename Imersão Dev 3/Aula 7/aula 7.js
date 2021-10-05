var cartas = [
  {
    imagem:
      "http://4.bp.blogspot.com/_ZCjsPKtJo-Y/S-Iv40Fs3CI/AAAAAAAABiM/ts-di-eE4EE/s400/51-2.jpg",
    nome: "Alphonse Elric",
    atributos: {
      Alquimia: 6,
      Combate: 8,
      Fazer_Chorar: 6,
      Regeneração: 4
    }
  },
  {
    imagem:
      "http://3.bp.blogspot.com/_ZCjsPKtJo-Y/S9shRKRxlaI/AAAAAAAABFE/uI1TfzuK3OA/s400/1-1.jpg",
    nome: "Edward Elric",
    atributos: {
      Alquimia: 8,
      Combate: 6,
      Fazer_Chorar: 6,
      Regeneração: 0
    }
  },
  {
    imagem:
      "http://3.bp.blogspot.com/_ZCjsPKtJo-Y/S9sgdCghVVI/AAAAAAAABDM/MCWBBgtEG9E/s400/8-2.jpg",
    nome: "Barry, O Açougueiro",
    atributos: {
      Alquimia: 0,
      Combate: 5,
      Fazer_Chorar: 0,
      Regeneração: 2
    }
  },
  {
    imagem:
      "http://3.bp.blogspot.com/_ZCjsPKtJo-Y/S9sgtpRfVeI/AAAAAAAABDU/vvgDJSt99BA/s400/8-1.jpg",
    nome: "Slicer",
    atributos: {
      Alquimia: 0,
      Combate: 7,
      Fazer_Chorar: 5,
      Regeneração: 2
    }
  },
  {
    imagem:
      "http://1.bp.blogspot.com/_ZCjsPKtJo-Y/S93hpSSAcbI/AAAAAAAABG0/Ft6NIic93WQ/s400/19-2.jpg",
    nome: "Luxúria",
    atributos: {
      Alquimia: 2,
      Combate: 9,
      Fazer_Chorar: 1,
      Regeneração: 9
    }
  },
  {
    imagem:
      "http://3.bp.blogspot.com/_ZCjsPKtJo-Y/S_M9Hqf3M7I/AAAAAAAABm8/KFSd9unbRMY/s400/53-1.jpg",
    nome: "Inveja",
    atributos: {
      Alquimia: 2,
      Combate: 6,
      Fazer_Chorar: 4,
      Regeneração: 9
    }
  },
  {
    imagem:
      "http://3.bp.blogspot.com/_ZCjsPKtJo-Y/S_M80PHR9uI/AAAAAAAABmM/CJTR75lYn9I/s400/56-1.jpg",
    nome: "King Bradley",
    atributos: {
      Alquimia: 0,
      Combate: 10,
      Fazer_Chorar: 2,
      Regeneração: 0
    }
  },
  {
    imagem:
      "http://1.bp.blogspot.com/_ZCjsPKtJo-Y/S9-VcE3HgUI/AAAAAAAABc8/-RvghSe0PRI/s400/37-2.jpg",
    nome: "Orgulho",
    atributos: {
      Alquimia: 3,
      Combate: 8,
      Fazer_Chorar: 2,
      Regeneração: 10
    }
  },
  {
    imagem:
      "http://4.bp.blogspot.com/_ZCjsPKtJo-Y/S93iSg-OFJI/AAAAAAAABIU/f5_FDcu104o/s400/13-2.jpg",
    nome: "Ganância",
    atributos: {
      Alquimia: 1,
      Combate: 9,
      Fazer_Chorar: 7,
      Regeneração: 9
    }
  },
  {
    imagem:
      "http://1.bp.blogspot.com/_ZCjsPKtJo-Y/S95XGnHebTI/AAAAAAAABO0/tdg3yKLtgrI/s1600/21-2.jpg",
    nome: "Scar",
    atributos: {
      Alquimia: 7,
      Combate: 9,
      Fazer_Chorar: 6,
      Regeneração: 0
    }
  },
  {
    imagem:
      "http://1.bp.blogspot.com/_ZCjsPKtJo-Y/S9-VH2M8LEI/AAAAAAAABck/8VgFKSfL-TU/s400/39-1.jpg",
    nome: "Winry Rockbell",
    atributos: {
      Alquimia: 0,
      Combate: 1,
      Fazer_Chorar: 9,
      Regeneração: 0
    }
  }
];
var cartaMaquina;
var cartaJogador;
function sortearCarta() {
  var indiceCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[indiceCartaMaquina];
  var indiceCartaJogador = parseInt(Math.random() * 11);
  while (indiceCartaJogador == indiceCartaMaquina) {
    indiceCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[indiceCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("cartas").innerHTML =
    "<img src=" + cartaJogador.imagem + "> ";
  exibirOpcoes();
}
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}
function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
  return "vazio";
}
function jogar() {
  var atributoSelecionado = obterAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  elementoResultado.innerHTML = "";
  if (atributoSelecionado == "vazio") {
    elementoResultado.innerHTML += "Selecione um atributo.";
  } else {
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML +=
        "Você venceu.<br/>Seu atributo " +
        valorCartaJogador +
        " > " +
        valorCartaMaquina +
        " do seu adversário.";
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML +=
        "Você perdeu.<br/>Seu atributo " +
        valorCartaJogador +
        " < " +
        valorCartaMaquina +
        " do seu adversário.";
    } else {
      elementoResultado.innerHTML += "Empate.";
    }
    document.getElementById("cartas").innerHTML +=
      " <img src=" + cartaMaquina.imagem + ">";
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  }
}
