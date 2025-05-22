document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('miBoton');
  const parrafo = document.getElementById('miParrafo');

  const textoOriginal =
    'En este ejercicio vemos cómo capturar eventos en una página web utilizando JavaScript.<br>' +
    'Específicamente, veremos cómo detectar un clic en un botón<br>' +
    'y cambiar dinámicamente el contenido de un párrafo<br>' +
    'utilizando el DOM.';

  const textoNuevo =
    'Hiciste clic en el botón y se activó un evento.<br>' +
    'El contenido de este párrafo fue modificado dinámicamente.<br>' +
    'Esto se logra gracias al uso de JavaScript y el DOM.<br>' +
    'Los eventos permiten que la página reaccione a las acciones del usuario.';

  let cambiado = false;

  boton.addEventListener('click', function () {
    if (!cambiado) {
      parrafo.innerHTML = textoNuevo;
      boton.textContent = 'Volver al texto original';
    } else {
      parrafo.innerHTML = textoOriginal; // Usamos innerHTML aquí también
      boton.textContent = 'Cambiar texto';
    }
    cambiado = !cambiado;
  });
});