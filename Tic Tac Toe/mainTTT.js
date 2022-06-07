//Crear variable boolean para cambiar de X a O
var XD = true;
//id es el elemento DOM
function clic(id) {

  //Checar si el boolean es verdadero para poner X, o falso para poner O y alternar entre cada uso de botón
  if (XD == true) {
    id.innerHTML = "X";
    //Alternar el color del botón
    id.style.color = "#E13835";
    XD = false;
    //Frase que aparece arriba del juego para indicar que sigue o jugador
    document.getElementById("turno").innerHTML = "Player <i>O</i>'s Turn"
  } else {
    id.innerHTML = "O";
    //Alternar el color del botón
    id.style.color = "#C779EE";
    XD = true;
    //Frase que aparece arriba del juego para indicar que sigue x jugador
    document.getElementById("turno").innerHTML = "Player <em>X</em>'s Turn"
  }
  //Desabilitar el botón después de usarlo
  id.disabled = true;
}

//Define pimero los elemtos DOM para que se facilite el arreglo
function checar() {
  var tablero = [];
  tablero[0] = document.getElementById("Uno").innerHTML;
  tablero[1] = document.getElementById("Dos").innerHTML;
  tablero[2] = document.getElementById("Tres").innerHTML;
  tablero[3] = document.getElementById("Cuatro").innerHTML;
  tablero[4] = document.getElementById("Cinco").innerHTML;
  tablero[5] = document.getElementById("Seis").innerHTML;
  tablero[6] = document.getElementById("Siete").innerHTML;
  tablero[7] = document.getElementById("Ocho").innerHTML;
  tablero[8] = document.getElementById("Nueve").innerHTML;
//Formas de ganar
  var check = [];
  //Formas de ganar del jugador X
  check[0] = tablero[0] == "X" && tablero[1] == "X" && tablero[2] == "X";
  check[1] = tablero[3] == "X" && tablero[4] == "X" && tablero[5] == "X";
  check[2] = tablero[6] == "X" && tablero[7] == "X" && tablero[8] == "X";
  check[3] = tablero[0] == "X" && tablero[3] == "X" && tablero[6] == "X";
  check[4] = tablero[1] == "X" && tablero[4] == "X" && tablero[7] == "X";
  check[5] = tablero[2] == "X" && tablero[5] == "X" && tablero[8] == "X";
  check[6] = tablero[0] == "X" && tablero[4] == "X" && tablero[8] == "X";
  check[7] = tablero[2] == "X" && tablero[4] == "X" && tablero[6] == "X";
  //Formas de ganar del jugador O
  check[8] = tablero[0] == "O" && tablero[1] == "O" && tablero[2] == "O";
  check[9] = tablero[3] == "O" && tablero[4] == "O" && tablero[5] == "O";
  check[10] = tablero[6] == "O" && tablero[7] == "O" && tablero[8] == "O";
  check[11] = tablero[0] == "O" && tablero[3] == "O" && tablero[6] == "O";
  check[12] = tablero[1] == "O" && tablero[4] == "O" && tablero[7] == "O";
  check[13] = tablero[2] == "O" && tablero[5] == "O" && tablero[8] == "O";
  check[14] = tablero[0] == "O" && tablero[4] == "O" && tablero[8] == "O";
  check[15] = tablero[2] == "O" && tablero[4] == "O" && tablero[6] == "O";
  //Variable que verifique que todos los botones esten usados/seleccionados
  var empate = tablero[0] != "" && tablero[1] != "" && tablero[2] != "" && tablero[3] != "" && tablero[4] != "" && tablero[5] != "" && tablero[6] != "" && tablero[7] != "" && tablero[8] != "";
  for (var i = 0; i < 16; i++) {
    if (check[i] == true) {
      //Define que el jugador X ganó
      if (i < 8) {
        document.getElementById("turno").innerHTML = "Player <em>X</em> won!";
        //Define que el jugador O ganó
        i = 16;
      } else {
        document.getElementById("turno").innerHTML = "Player <i>O</i> won!";
        i = 16;
      }
      //Función que deshabilita todos los botones
      deshabilitar();
      //Si ningun jugador ganó y todos los botones están usados/seleccionados llevará al empate
    } else if (empate == true) {
      document.getElementById("turno").innerHTML = "It's a tie!";
    }
  }
}
//Función que se utiliza para deshabilitar todos los botones cuando un jugador gana
function deshabilitar() {
  document.getElementById("Uno").disabled = true;
  document.getElementById("Dos").disabled = true;
  document.getElementById("Tres").disabled = true;
  document.getElementById("Cuatro").disabled = true;
  document.getElementById("Cinco").disabled = true;
  document.getElementById("Seis").disabled = true;
  document.getElementById("Siete").disabled = true;
  document.getElementById("Ocho").disabled = true;
  document.getElementById("Nueve").disabled = true;
}
