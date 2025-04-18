let meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  function retornarMes(numero) {
  if (numero >= 1 && numero <= 12) {
    return meses[numero - 1];
  } else {
    return "El número " +  numero + " no corresponde a un mes"; 
}
  }
  // Ejemplo:
console.log(retornarMes(5));   // Muestra: Mayo
console.log(retornarMes(15));  // Muestra: "(numero) no corresponde a un mes"
