var nome = "Jefferson"

var notaDoPrimeiroBimestre = 9.4342
var notaDoSegundoBimestre = 7.253
var notaDoTerceiroBimestre = 4.275
var notaDoQuartoBimestre = 2.1469

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

var notaArredondada = notaFinal.toFixed(0)

console.log("Bem-vindo " + nome)
console.log("Nota Final " + notaFinal)
console.log("Nota Fixada " + notaFixada)
console.log("Nota Arredondada " + notaArredondada)

// Revisão

// Variáveis, strings, console.log, toFixed, operações matemáticas e concatenação.

// Desafios

//1. Aprovado ou Reprovado

if (notaFinal < 5)
  console.log("Reprovado.")
else if (notaFinal = 5 & notaFinal < 6)
  console.log("Recuperação.")
else if (notaFinal >= 6)
  console.log("Aprovado.")

//2. Alterar Fundo

//3. Aparecer na Página



//4. Conversor de Temperatura

var C = 25
var F = 230
var Celsius = (F-32)/1.8
var Fahrenheit = 1.8*C + 32

console.log(Celsius + "°C")
console.log(Fahrenheit + "ºF")

//5. Linha única

console.log("Desafio: Nota " + ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1))

