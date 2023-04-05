var texto = document.getElementById("testico");
var boton = document.getElementById("botoncito");
var colorete1 = document.getElementById("color1").value;
var colorete2 = document.getElementById("color2").value;
var colorete3 = document.getElementById("color3").value;
boton.addEventListener("click", dibujoporclik);
var d = document.getElementById("dibujito");
var ancho = d.width;
var alto = d.height;
var lienzo = d.getContext("2d");

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarElipse(
  centroX,
  centroY,
  radioX,
  radioY,
  rotacion,
  anguloInicial,
  anguloFinal,
  colorRelleno
) {
  lienzo.beginPath();
  lienzo.ellipse(centroX, centroY, radioX, radioY, rotacion, 0, 2 * Math.PI);
  lienzo.fillStyle = colorRelleno;
  lienzo.fill();
  lienzo.lineWidth = 1;
  lienzo.strokeStyle = colorRelleno;
  lienzo.stroke();
}

function dibujoporclik() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var x;
  var y;
  var x_y;
  var espacio = ancho / lineas;
  var colorete1 = document.getElementById("color1").value;
  var colorete2 = document.getElementById("color2").value;
  var colorete3 = document.getElementById("color3").value;

  for (l = 0; l < lineas; l++) {
    x = espacio * l;
    y = espacio * (l + 1);
    x_y = ancho + 1 * espacio;
    dibujarlinea(colorete1, 1, x, y, ancho - 1);
    dibujarlinea(colorete1, x, 1, ancho - 1, y);
    dibujarElipse(500, 500, 80, 110, Math.PI / 2, 0, 2 * Math.PI, colorete2);
    dibujarElipse(500, 500, 10, 60, Math.PI, 0, 2 * Math.PI, colorete3);
  }

  dibujarlinea(colorete1, 1, 1, 1, 999);
  dibujarlinea(colorete1, 1, 999, 999, 999);
  dibujarlinea(colorete1, 999, 999, 999, 1);
  dibujarlinea(colorete1, 999, 1, 1, 1);
}
function borrarlienzo() {
  lienzo.clearRect(0, 0, d.width, d.height);
}
var borrador = document.getElementById("borrar");
borrador.addEventListener("click", borrarlienzo);
