let iconos = []
let selecciones = []
generarTablero();

function cargarIconos() {
  iconos = [
    "<img src='https://i.ibb.co/4SG5shk/580b57fbd9996e24bc43c02c.png' width='100%'>",
    "<img src='https://i.ibb.co/GVLFSxH/00.png' width='100%'>",
    "<img src='https://i.ibb.co/SmVF5vB/00.png' width='100%'>",
    "<img src='https://i.ibb.co/y6z683V/00.png' width='100%'>",
    "<img src='https://i.ibb.co/85r8z0f/9978a389246e31ed58bf4ebfc0cbe7ec.png' width='100%'>",
    "<img src='https://i.ibb.co/mC2pqc5/00.jpg' width='100%'>",
    "<img src='https://i.ibb.co/JQBmBXN/00.png' width='100%'>",
    "<img src='https://i.ibb.co/pK31kwZ/00.png' width='100%'>"
  ]
}

function generarTablero() {
  cargarIconos();
  selecciones = [];
  var tarjetas= []
  for (var i = 0; i < 16; i++) {
    tarjetas[i]=document.getElementById("trasera" + i)
  }
  tarjetas.sort(() => Math.random() - 0.5)
  for (var i = 0; i < tarjetas.length; i++) {
    tarjetas[i].innerHTML = iconos[0];
    if (i%2 ==1){
      iconos.splice(0,1);
    }
  }
}
