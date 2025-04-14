// js/ejercicio14.js

const duplicar = (array) => {
    const resultado = [];
  
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * 2);
    }
  
    return resultado;
  };
  
  // Prueba de la función
  const numeros = [1, 4, 7, 10];
  const duplicados = duplicar(numeros);
  
  console.log("Arreglo original:", numeros);
  console.log("Arreglo duplicado:", duplicados);
  