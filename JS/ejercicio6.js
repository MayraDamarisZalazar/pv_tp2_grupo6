const edades = [18, 22, 25, 30, 19, 28, 34, 21];

const calcularPromedio = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
};

console.log("El promedio de edades es:", calcularPromedio(edades));