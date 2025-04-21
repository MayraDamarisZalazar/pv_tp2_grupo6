const edades = [18, 21, 30, 25, 27, 40, 33, 19];

const calcularPromedio = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  const promedio = suma / array.length;
  console.log(`El promedio de edades es: ${promedio}`);
};

calcularPromedio(edades);

