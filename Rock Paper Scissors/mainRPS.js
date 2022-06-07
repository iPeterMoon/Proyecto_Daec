//Definimos en una variable un intervalo que ejecutara la funcion ar cada .1 segundos
var timer = setInterval(ar, 100);
//Definimos las variables que representaran la seleccion del jugador y del bot
var bot="";
var jugador="";
//Función que hace que el recuadro que representa al bot cambie rapidamente
function ar() {
  /*Utilizamos el método math.random la cual devuelve un valor entre 0 y 1, lo multiplicamos por tres
  junto a math.floor que redondeará este número eliminando los decimales*/
  var compu = Math.floor(Math.random() * 3);
  //Utilizamos un switch que evaluará la variable con el numero random
  switch (compu) {
    //se definen los casos
    case 0:
      //se le asigna al recuadro del bot la imagen de piedra
      document.getElementById("botsote").src = "Rock Paper Scissors/Imagenes/rock.png";
      //se le asigna a la variable el valor de piedra para ser comparado mas adelante
      bot="piedra";
      break;
    case 1:
      //se le asigna al recuadro del bot la imagen de papel
      document.getElementById("botsote").src = "Rock Paper Scissors/Imagenes/papel.png";
      //se le asigna a la variable el valor de papel para ser comparado mas adelante
      bot="papel";
      break;
    case 2:
      //se le asigna al recuadro del bot la imagen de papel
      document.getElementById("botsote").src = "Rock Paper Scissors/Imagenes/tijeras.png";
      //se le asigna a la variable el valor de tijeras para ser comparado mas adelante
      bot="tijeras"
      break;
  }
}
//funcion que se realiza al presionar el boton de piedra
function piedra() {
  //Se asigna la imagen del botón seleccionado en el objeto DOM de "player"
  document.getElementById("player").src = "Rock Paper Scissors/Imagenes/rock.png";
  //Se limpia el intervalo "timer" bloqueando la seleccion del bot y se llama a la función checar 2 segundos despues de presionar el botón
  setInterval(function(){clearInterval(timer); checar();},2000);
  //se le asigna a la variable del jugador el valor de piedra para ser comparado mas adelante
  jugador="piedra";
  //se desactivan todos los botones
  document.getElementById("piedra").disabled = true;
  document.getElementById("papel").disabled = true;
  document.getElementById("tijera").disabled = true;
}
//funcion que se realiza al presionar el boton de papel
function papel() {
  //Se asigna la imagen del botón seleccionado en el objeto DOM de "player"
  document.getElementById("player").src = "Rock Paper Scissors/Imagenes/papel.png";
  //Se limpia el intervalo "timer" bloqueando la seleccion del bot y se llama a la función checar 2 segundos despues de presionar el botón
  setInterval(function(){clearInterval(timer); checar();},2000);
  //se le asigna a la variable del jugador el valor de piedra para ser comparado mas adelante
  jugador="papel";
  //se desactivan todos los botones
  document.getElementById("piedra").disabled = true;
  document.getElementById("papel").disabled = true;
  document.getElementById("tijera").disabled = true;
}
//funcion que se realiza al presionar el boton de piedra
function tijera() {
  //Se asigna la imagen del botón seleccionado en el objeto DOM de "player"
  document.getElementById("player").src = "Rock Paper Scissors/Imagenes/tijeras.png";
  //Se limpia el intervalo "timer" bloqueando la seleccion del bot y se llama a la función checar 2 segundos despues de presionar el botón
  setInterval(function(){clearInterval(timer); checar();},2000);
  //se le asigna a la variable del jugador el valor de piedra para ser comparado mas adelante
  jugador="tijeras"
  //se desactivan todos los botones
  document.getElementById("piedra").disabled = true;
  document.getElementById("papel").disabled = true;
  document.getElementById("tijera").disabled = true;
}

function checar() {
  //definimos un array con todos los casos posibles en los que puede terminar el juego
  var casos = [];
  //los primeros tres representan los casos en los que el jugador gana
  //Se evalúan ambos valores con una condición que utiliza &&
  casos[0] = jugador == "piedra" && bot == "papel";
  casos[1] = jugador == "piedra" && bot == "tijeras";
  casos[2] = jugador == "papel" && bot == "piedra";
  //los siguentes tres representan los casos en los que el bot gana
  //Se evalúan ambos valores con una condición que utiliza &&
  casos[3] = jugador == "papel" && bot == "tijeras";
  casos[4] = jugador == "tijeras" && bot == "piedra";
  casos[5] = jugador == "tijeras" && bot == "papel";
  //El ultimo caso representa el empate
  //Se evalua que ambos valores sean iguales
  casos[6] = jugador == bot;
  //utilizamos if/elseif para detectar cual de los casos es verdadero y se despliega el mensaje correspondiente
  if (casos[0] == true) {
    document.getElementById("win").innerHTML = "YOU LOSE: PAPER COVERS ROCK";
  } else if (casos[1] == true) {
    document.getElementById("win").innerHTML = "YOU WIN: ROCK SMASHES SCISSORS";
  } else if (casos[2] == true) {
    document.getElementById("win").innerHTML = "YOU WIN: PAPER COVERS ROCK";
  } else if (casos[3] == true) {
    document.getElementById("win").innerHTML = "YOU LOSE: SCISSORS CUTS PAPER";
  } else if (casos[4] == true) {
    document.getElementById("win").innerHTML = "YOU LOSE: ROCK SMASHES SCISSORS";
  } else if (casos[5] == true) {
    document.getElementById("win").innerHTML = "YOU WIN: SCISSORS CUTS PAPER";
  } else if (casos[6] == true) {
    document.getElementById("win").innerHTML = "IT'S A TIE";
  }
}
