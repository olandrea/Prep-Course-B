// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma = 0; 
  for (let i = 1; i <= 10; i++) {
        suma = suma + i;
  }
    return suma; 
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var nuevoArray = [];
  var indice = 0;
  //for ( let i = 0; i < array.length; i ++){
    while (indice < array.length) {
     if ( array[indice] % 2 === 0 ){
      nuevoArray.push(array[indice]);
    }
    indice ++;
  }
  return nuevoArray;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
 // var cuadrado = 0; 
 // var num = 0;
 // var nuevoArray = [];
 // for ( let i = 0; i < array.length; i ++){
  //    num = array[i];
  //    cuadrado = Math.pow(num,2);
  //    nuevoArray.push(cuadrado);
  //}
  //return nuevoArray;

  //____________________________________
  //return array.map (function (num){
  //  return Math.pow (num, 2);
  //})

  //----------------------------------

  var alCuadrado = function (num){
    return Math.pow (num, 2);
  }

  var resultado = array.map (alCuadrado);
  return resultado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
 // var suma = 0;
 // var num = 0;
 // for ( let i = 0; i < array.length; i ++){
 //   num = array[i];
 //   suma = suma + num; 
 // }
 // return suma;

 var resultado = array.reduce(function (acumulador, num) {
   return acumulador + num;
 }, 0);
 return resultado;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var digitosStr = num + "";
  return digitosStr.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
