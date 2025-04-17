
const inputTexto = document.querySelector('#entradaTexto');
const textoMostrado = document.querySelector('#textoMostrado');


inputTexto.addEventListener('input', () => {
  textoMostrado.textContent = inputTexto.value;
});