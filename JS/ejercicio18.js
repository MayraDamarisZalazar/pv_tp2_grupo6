const calcularPromedio = (a, b, c) => {
    return (a + b + c) / 3;
  };
  
  document.getElementById("btnCalcular").addEventListener("click", () => {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
  
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      resultado.textContent = "Por favor, ingresa los tres números.";
      return;
    }
  
    const promedio = calcularPromedio(num1, num2, num3);
    resultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
  });