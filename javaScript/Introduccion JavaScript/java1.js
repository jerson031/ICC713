
var caja = document.getElementById("caja");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
var n1 = inputUno.value;
var n2 = inputDos.value;

resultado = aleatorio(n1,n2);
document.getElementById("Random").innerHTML = resultado;
caja.style.background = "orange";
});
function aleatorio(a,b) {
  return Math.round(Math.random()*(b-a)+parseInt(a));
  }