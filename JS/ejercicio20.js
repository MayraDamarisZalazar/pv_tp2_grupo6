const paisSelect = document.getElementById("pais");
const capitalSelect = document.getElementById("capital");
const mensaje = document.getElementById("mensaje");

const paisesCapitales = {
  ARGENTINA: "Buenos Aires",
  BRASIL: "Brasilia",
  MEXICO: "Ciudad de México",
  PERU: "Lima",
  COLOMBIA: "Bogotá"
};

paisSelect.addEventListener("change", () => {
  const pais = paisSelect.value;
  const capital = paisesCapitales[pais];

  capitalSelect.innerHTML = ""; // Limpia lista de capitales

  if (capital) {
    const opcion = document.createElement("option");
    opcion.value = capital.toLowerCase();
    opcion.text = capital;
    capitalSelect.appendChild(opcion);
    capitalSelect.value = opcion.value;

    mensaje.textContent = `Seleccionaste: ${pais} - ${capital}`;
    mensaje.style.display = "block";

    
    console.log(`País: ${pais.charAt(0).toUpperCase() + pais.slice(1)}, Capital: ${capital}`);
  } else {
    const opcion = document.createElement("option");
    opcion.text = "- Capital -";
    capitalSelect.appendChild(opcion);
    
    mensaje.textContent= "";
    mensaje.style.display= "none";}

});

