const form = document.getElementById('lenguajes-form');
const resultado = document.getElementById('resultado');

form.addEventListener('change', (event) => {
  if (event.target.name === 'lenguaje') {
    const lenguajeSeleccionado = event.target.value;
    resultado.textContent = `Lenguaje seleccionado: ${lenguajeSeleccionado}`;
    console.log(`Seleccionaste: ${lenguajeSeleccionado}`);
  }
});
