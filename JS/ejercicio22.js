const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

entrada.addEventListener("input", () => {
  const texto = entrada.value;
  resultado.textContent = texto;

  if (texto.length > 20) {
    resultado.classList.add("alerta");
  } else {
    resultado.classList.remove("alerta");
  }
});