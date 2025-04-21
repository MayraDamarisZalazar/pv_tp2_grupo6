const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", () => {
  // Colores aleatorios para elegir
  const colores = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#1ABC9C"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  document.body.style.backgroundColor = colorAleatorio;
  console.log("Color de fondo cambiado a:", colorAleatorio);
});
