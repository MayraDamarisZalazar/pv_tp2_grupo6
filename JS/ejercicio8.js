const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
      alert(`${numero1} es mayor que ${numero2}`);
    } else if (numero2 > numero1) {
      alert(`${numero2} es mayor que ${numero1}`);
    } else {
      alert(`Ambos números son iguales: ${numero1}`);
    }
  };
  
  // Prueba con diferentes argumentos
  calcularMayor(10, 5);
  calcularMayor(7, 20);
  calcularMayor(15, 15);  