var comentario = document.getElementById("comentario");
var comentarios1 =document.getElementById("comentarios1");
var nombre = document.getElementById("nombre");
var fecha =document.getElementById("fecha");
var i = 1;
var row = document.getElementById("row");
var input = document.getElementById("nombre");






  


btn.addEventListener("click",function(){
    var Nombre = document.getElementById("nombre").value.length ;
    var Comenta = document.getElementById("comentario").value.length ;
    if(Nombre<3 ){
        
        return Swal.fire({
            title: 'Ingrese mas caracteres para nombre ',
            icon: 'error',
            background: 'white',
        
          });

      
    }
        if(Comenta<1 || Nombre<3){
           return Swal.fire({
                title: 'Rellene las cajas de los comentarios ',
                icon: 'error',
                background: 'white',
            
              });

        }
           else{
               
       
    
    if(i<4){
        
    var fila = '<tr id="row' + i + '"><td>' + nombre.value + '</td><td>' + fecha.value + '</td><td>' + comentario.value + '</tr>'; 

    i++;
    
    $('#tabla tr:first').after(fila);
    
   
    }else{
       
       Quitar();
   
       i--;
      
    }
           }
}

);

    
function Quitar() {
    var fila = document.getElementById("fila");
    
    $('#tabla tr:first').after(fila).remove();
    
}