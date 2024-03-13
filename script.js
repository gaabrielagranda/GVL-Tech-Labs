//Arreglo que contiene las respuestas correctas
let correctas = [1,2,3,2,1,2,1,2,2,2,1,2,3,3,2,2,2,2,1,2];

//Arreglo donde se guardan las respuestas del usuario
let opcion_elegida = [];

let cantidad_correctas = 0;

//Funcion que toma el numero de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
   //guardo la respuesta elegida
   opcion_elegida[num_pregunta] = seleccionada.value;
}

   function corregir(){
      cantidad_correctas = 0;
      for(i=0; i < correctas.length; i++){
         if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
         }
      }
      document.getElementById("resultado").innerHTML = cantidad_correctas;
   
      mostrarPopup();
}


function mostrarPopup() {
   var popup = document.getElementById("popup");
   popup.style.display = "block";
 }
 
 function cerrarPopup() {
   var popup = document.getElementById("popup");
   popup.style.display = "none";
 }