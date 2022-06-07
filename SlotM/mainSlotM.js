/*3 Timers, uno para cada Slot, con funciones diferentes
Ya que se requieren DOMs diferentes para cada uno*/
//Definidos en una variable para detenerlos después
var timer = [
  setInterval(cambiarUno, 150),
  setInterval(cambiarDos, 150),
  setInterval(cambiarTres, 150)
]

var botones = ["", "", ""]; //Variable para guardar el valor de cada uno de los SLOTS
//Variables Contadoras
var iTimer = 0; //Contador para recorrer el array que contiene los Timers
var iUno = 0, //Contadores para cada una de las funciones de los timers
  iDos = 0,
  iTres = 0;
//Puntuación del jugador
var puntuacion = 0;

//Función para el primer SLOT
function cambiarUno() {
  /*Switch que segun la variable contadora iUno presente una imagen en el Slot
  Estas imagenes se van a repetir gracias al timer como si de un ciclo se tratase
  También guardará en el array botones en el primer indice un valor que nos ayudará
    a comparar si los tres slots están igual a la hora de detenerlos*/
  switch (iUno) {
    case 0:
      document.getElementById("uno").src = "SlotM/Imagenes/cereza.png";
      botones[0] = "cereza";
      break;
    case 1:
      document.getElementById("uno").src = "SlotM/Imagenes/fresa.png";
      botones[0] = "fresa";
      break;
    case 2:
      document.getElementById("uno").src = "SlotM/Imagenes/naranja.png";
      botones[0] = "naranja";
      break;
    case 3:
      document.getElementById("uno").src = "SlotM/Imagenes/manzana.png";
      botones[0] = "manzana";
      break;
    case 4:
      document.getElementById("uno").src = "SlotM/Imagenes/melon.png";
      botones[0] = "melon";
      break;
    case 5:
      document.getElementById("uno").src = "SlotM/Imagenes/galaxian.png";
      botones[0] = "galaxian";
      break;
    case 6:
      document.getElementById("uno").src = "SlotM/Imagenes/bell.png";
      botones[0] = "campana";
      break;
    case 7:
      document.getElementById("uno").src = "SlotM/Imagenes/key.png";
      botones[0] = "llave";
      break;
  }
  //Ir acumulando la variable para cambiar de imagen constantemente
  iUno++;
  //Reiniciar la variable cuando llegue a la última imagen, reiniciando así el ciclo
  if (iUno == 8) {
    iUno = 0;
  }
}
//Función para el segundo SLOT
function cambiarDos() {
  /*Switch que segun la variable contadora iDos presente una imagen en el Slot
  Estas imagenes se van a repetir gracias al timer como si de un ciclo se tratase
  También guardará en el array "botones" en el segundo indice un valor que nos ayudará
    a comparar si los tres slots están igual a la hora de detenerlos*/
  switch (iDos) {
    case 0:
      document.getElementById("dos").src = "SlotM/Imagenes/cereza.png";
      botones[1] = "cereza";
      break;
    case 1:
      document.getElementById("dos").src = "SlotM/Imagenes/fresa.png";
      botones[1] = "fresa";
      break;
    case 2:
      document.getElementById("dos").src = "SlotM/Imagenes/naranja.png";
      botones[1] = "naranja";
      break;
    case 3:
      document.getElementById("dos").src = "SlotM/Imagenes/manzana.png";
      botones[1] = "manzana";
      break;
    case 4:
      document.getElementById("dos").src = "SlotM/Imagenes/melon.png";
      botones[1] = "melon";
      break;
    case 5:
      document.getElementById("dos").src = "SlotM/Imagenes/galaxian.png";
      botones[1] = "galaxian";
      break;
    case 6:
      document.getElementById("dos").src = "SlotM/Imagenes/bell.png";
      botones[1] = "campana";
      break;
    case 7:
      document.getElementById("dos").src = "SlotM/Imagenes/key.png";
      botones[1] = "llave";
      break;
  }
  //Ir acumulando la variable para cambiar de imagen constantemente
  iDos++;
  //Reiniciar la variable cuando llegue a la última imagen, reiniciando así el ciclo
  if (iDos == 8) {
    iDos = 0;
  }
}
//Función para el tercer SLOT
function cambiarTres() {
  /*Switch que segun la variable contadora iDos presente una imagen en el Slot
  Estas imagenes se van a repetir gracias al timer como si de un ciclo se tratase
  También guardará en el array "botones" en el segundo indice un valor que nos ayudará
    a comparar si los tres slots están igual a la hora de detenerlos*/
  switch (iTres) {
    case 0:
      document.getElementById("tres").src = "SlotM/Imagenes/cereza.png";
      botones[2] = "cereza";
      break;
    case 1:
      document.getElementById("tres").src = "SlotM/Imagenes/fresa.png";
      botones[2] = "fresa";
      break;
    case 2:
      document.getElementById("tres").src = "SlotM/Imagenes/naranja.png";
      botones[2] = "naranja";
      break;
    case 3:
      document.getElementById("tres").src = "SlotM/Imagenes/manzana.png";
      botones[2] = "manzana";
      break;
    case 4:
      document.getElementById("tres").src = "SlotM/Imagenes/melon.png";
      botones[2] = "melon";
      break;
    case 5:
      document.getElementById("tres").src = "SlotM/Imagenes/galaxian.png";
      botones[2] = "galaxian";
      break;
    case 6:
      document.getElementById("tres").src = "SlotM/Imagenes/bell.png";
      botones[2] = "campana";
      break;
    case 7:
      document.getElementById("tres").src = "SlotM/Imagenes/key.png";
      botones[2] = "llave";
      break;
  }
  //Ir acumulando la variable para cambiar de imagen constantemente
  iTres++;
  //Reiniciar la variable cuando llegue a la última imagen, reiniciando así el ciclo
  if (iTres == 8) {
    iTres = 0;
  }
}

function parar() {
  //Parar el slot segun la variable iTimet(0, 1 o 2)
  clearInterval(timer[iTimer]);
  //Acumular la variable para que al volver a parar, detenga el siguiente slot
  iTimer++;
  //La condición será verdadera si ya detuvo los 3 slots
  if (iTimer == 3) {
    //La condición será verdadera si el valor de los tres slots una vez detenidos son iguales
    if (botones[0] == botones[1] && botones[1] == botones[2]) {
      //Mostrar que has ganado
      document.getElementById("winMessage").innerHTML = "YOU WIN";
      //Segun la imagen con la que haya ganado, sumar puntos a la puntuación total
      switch (botones[0]) {
        case "cereza":
          puntuacion += 10;
          break;
        case "fresa":
          puntuacion += 20;
          break;
        case "naranja":
          puntuacion += 50;
          break;
        case "manzana":
          puntuacion += 100;
          break;
        case "melon":
          puntuacion += 250;
          break;
        case "galaxian":
          puntuacion += 500;
          break;
        case "campana":
          puntuacion += 1000;
          break;
        case "llave":
          puntuacion += 2000;
          //Pequeño easter egg (secreto) que al ganar con la llave muestre un gif en forma de celebracion
          //Gif de rata bailando
          document.getElementById("rata").innerHTML =
          "<img src='SlotM/Imagenes/rata.gif' height='100%'>"
          break;
      }
      //Mostrar la puntuación en un elemento DOM asignado
      document.getElementById("puntos").innerHTML = "SCORE: " + puntuacion; + " POINTS"
    } else {
      //Si no son iguales al estar detenidos significa que perdió
      document.getElementById("winMessage").innerHTML = "YOU LOSE";
    }
  }
}
//Función para volver a intentar el juego
function reiniciar() {
  //Parar los tres timers por que si no se hace se agrega más velocidad
  clearInterval(timer[0]);
  clearInterval(timer[1]);
  clearInterval(timer[2]);
  //Volver a declarar los tres timers
  timer[0] = setInterval(cambiarUno, 150);
  timer[1] = setInterval(cambiarDos, 150);
  timer[2] = setInterval(cambiarTres, 150);
  //Reiniciar la variable contadora para detener los timers
  iTimer = 0;
  //Reiniciar el array que guarda el valor de los slots
  botones = ["", "", ""]
  //Borrar el mensaje de win/lose
  document.getElementById("winMessage").innerHTML = "";
  //Borrar el easter-egg si es que se obtuvo
  document.getElementById("rata").innerHTML = "";
}
