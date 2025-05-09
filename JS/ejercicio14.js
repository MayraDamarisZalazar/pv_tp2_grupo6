// Ejercicio 14
const duplicar = (numeros) => {
  return numeros.map(numero => numero * 2); 
};


const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = duplicar(numeros);

console.log(numerosDuplicados); // Output: [2, 4, 6, 8, 10]