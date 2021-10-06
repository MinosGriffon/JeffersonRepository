var cartas = [
    {
      imagem:
        "http://4.bp.blogspot.com/_ZCjsPKtJo-Y/S-Iv40Fs3CI/AAAAAAAABiM/ts-di-eE4EE/s400/51-2.jpg",
      nome: "Alphonse Elric",
      atributos: {
        Alquimia: 6,
        Combate: 8,
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
        Regeneração: 0
      }
    },
    {
      imagem:
        "http://4.bp.blogspot.com/_ZCjsPKtJo-Y/S_M9HFkWb1I/AAAAAAAABm0/e8GmFdlQOvg/s400/53-2.jpg",
      nome: "Roy Mustang",
      atributos: {
        Alquimia: 10,
        Combate: 5,
        Regeneração: 0
      }
    }
  ];
  
  var baralhoJogador = [];
  var baralhoMaquina = [];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearBaralho() {}
  
  function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random() * 12);
    cartaMaquina = cartas[indiceCartaMaquina];
    var indiceCartaJogador = parseInt(Math.random() * 12);
    while (indiceCartaJogador == indiceCartaMaquina) {
      indiceCartaJogador = parseInt(Math.random() * 12);
    }
    cartaJogador = cartas[indiceCartaJogador];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("carta-maquina").innerHTML = "";
    document.getElementById("carta-jogador").innerHTML = "";
    document.getElementById("carta-jogador").style.backgroundImage = `url(${""})`;
    document.getElementById("carta-maquina").style.backgroundImage = `url(${""})`;
    exibirCarta(cartaJogador);
  }
  
  function exibirCarta(carta) {
    var moldura =
      "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var opcoesTexto = "";
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    if (carta == cartaJogador) {
      document.getElementById(
        "carta-jogador"
      ).style.backgroundImage = `url(${cartaJogador.imagem})`;
      for (var atributo in carta.atributos) {
        opcoesTexto +=
          "<input type='radio' name='atributo' value='" +
          atributo +
          "'>" +
          atributo +
          " " +
          carta.atributos[atributo] +
          "<br/>";
      }
      var nome = `<p class="class-subtitle">${carta.nome}</p>`;
      document.getElementById("carta-jogador").innerHTML =
        moldura + nome + tagHTML + opcoesTexto + "</div>";
    } else if (carta == cartaMaquina) {
      document.getElementById(
        "carta-maquina"
      ).style.backgroundImage = `url(${cartaMaquina.imagem})`;
      for (var atributo in carta.atributos) {
        opcoesTexto +=
          "<p name='atributo' value='" +
          atributo +
          "'>" +
          atributo +
          " " +
          carta.atributos[atributo] +
          "</p>";
      }
      var nome = `<p class="class-subtitle">${cartaJogador.nome}</p>`;
      document.getElementById("carta-maquina").innerHTML =
        moldura + nome + tagHTML + opcoesTexto + "</div>";
    }
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
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
  
    if (atributoSelecionado == "vazio") {
      divResultado.innerHTML +=
        "<p class='resultado-final'>Selecione um atributo.</p>";
    } else {
      if (valorCartaJogador > valorCartaMaquina) {
        divResultado.innerHTML += "<p class='resultado-final'>Você venceu.</p>";
      } else if (valorCartaJogador < valorCartaMaquina) {
        divResultado.innerHTML += "<p class='resultado-final'>Você perdeu.</p>";
      } else {
        divResultado.innerHTML += "<p class='resultado-final'>Empate.</p>";
      }
      document.getElementById("btnSortear").disabled = false;
      document.getElementById("btnJogar").disabled = true;
      exibirCarta(cartaMaquina);
    }
  }
  