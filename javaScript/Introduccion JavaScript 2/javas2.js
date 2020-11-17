
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");
var btn2= document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado");
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"

btn.addEventListener("click",function(){
/* Obtenemos el valor de cada input accediendo a
su atributo "value" */
var n1 = inputUno.value;
var n2 = inputDos.value;
/* Llamamos a una función que permite realizar la
suma de los números y los mostramos al usuario" */

if (n2 % 1 == 0 && n1 % 1 == 0) {
    return resultado.innerHTML = suma(n1,n2);
  }
  return  Swal.fire({
    title: 'Numero no Entero ',
    icon: 'error',
    
    background: 'red',
  });


});

btn2.addEventListener("click",function(){
    var n1 = inputUno.value;
var n2 = inputDos.value;


    if (n2 % 1 == 0 && n1 % 1 == 0) {
      return resultado.innerHTML = resta(n1,n2);
    }
    return  Swal.fire({
        title: 'Numero no Entero ',
        icon: 'error',
        background: 'red',
    
      });
  
  
});

btn3.addEventListener("click",function(){
var n1 = inputUno.value;
var n2 = inputDos.value;

if (n2 % 1 == 0 && n1 % 1 == 0){
     return resultado.innerHTML = multiplicar(n1,n2);
  }
  return  Swal.fire({
    title: 'Numero no Entero ',
    icon: 'error',
    background: 'red',

  });
});

btn4.addEventListener("click",function(){
    var n1 = inputUno.value;
var n2 = inputDos.value;

if (n2 % 1 == 0 && n1 % 1 == 0 ) {
   if(n1!=0 && n2!=0 ){
   return resultado.innerHTML = dividir(n2,n1);
   }
   return Swal.fire({
    title: 'Esta dividiendo por Cero ',
    icon: 'error',
    background: 'red',
    backdrop: `
    rgba(0,0,123,0.4)
    
    left top
    no-repeat
  `

  });
  }
  return  Swal.fire({
    title: 'Numero no Entero ',
    icon: 'error',
    background: 'red ',

  });

});


function suma(n1, n2){

return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2){
    return parseInt(n1) - parseInt(n2);
}
function multiplicar(n1, n2){
    return parseInt(n1) * parseInt(n2);
}
function dividir(n1, n2){
    return parseInt(n1) / parseInt(n2);
}

