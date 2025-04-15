const nombres = ["Candela", "Mayra", "Alejandro", "Marcelo", "Carolina", "Ivan"];

const nombreMasLargo = (lista) => {
  let nombreMasLargo = "";

  for (const nombre of lista) {
    if (nombre.length > nombreMasLargo.length) {
      nombreMasLargo = nombre;
    }
  }

  return nombreMasLargo;
};

const resultado = nombreMasLargo(nombres);
console.log(`El nombre más largo es: ${resultado}`);
